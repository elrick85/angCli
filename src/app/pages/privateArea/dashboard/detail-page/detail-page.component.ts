import {Component, OnInit, ViewChild} from '@angular/core';
import {DashboardDetailComponent} from "../../../../components/dashboard-detail/dashboard-detail.component";
import {DashboardService} from "../dashboard.service";
import {WordModel} from "../../../../models/WordModel";
import {Route, ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    selector: 'detail-page',
    templateUrl: './detail-page.component.html',
    styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

    @ViewChild(DashboardDetailComponent) private detail: DashboardDetailComponent;
    public data: WordModel = new WordModel();

    constructor(private dashboardSrv: DashboardService, private route: ActivatedRoute, private router: Router) {

    }

    /**
     *
     * @param item
     * @returns {boolean}
     */
    onGridItemSave(item: WordModel) {
        item._id = this.data._id;

        this.dashboardSrv
            .updateWord(item)
            .then(() => {
                //this.dashboardSrv.query({skip: this.skip, take: this.pageSize})
            })
            .catch((er) => {
                alert(er);
            });

        return false;
    }

    onRemove() {
        this.dashboardSrv
            .removeWord(this.data._id)
            .then(() => {
                this.router.navigate(['/dashboard']);
            })
            .catch(er => alert(er));

        return false;
    }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];

        this.dashboardSrv
            .getWord(id)
            .then((word: WordModel) => this.data = word)
            .then(() => this.detail.openDialog(this.data));

        this.detail.saveDialog.subscribe(this.onGridItemSave.bind(this));
    }

}

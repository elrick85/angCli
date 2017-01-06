/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Component, OnInit, ElementRef, ViewChild, ViewContainerRef, TemplateRef} from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {Observable} from "rxjs";
import {GridComponent, GridDataResult, DataStateChangeEvent} from "@progress/kendo-angular-grid";
import {SortDescriptor} from "@progress/kendo-data-query";
import {WordModel} from "../../../models/WordModel";
import {Router} from "@angular/router";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    private view: Observable<GridDataResult>;
    private pageSize: number = 20;
    private skip: number = 0;

    @ViewChild(GridComponent) private grid: GridComponent;

    private sort;

    constructor(private dashboardSrv: DashboardService, private el: ElementRef, private router: Router) {
        this.view = dashboardSrv;

        this.dashboardSrv.query({skip: this.skip, take: this.pageSize, sort: this.sort});
    }

    public ngAfterViewInit(): void {
        this.grid.dataStateChange
            .do(this.afterDataStateChange.bind(this))
            .subscribe((x) => {
                return this.dashboardSrv.query(x);
            });
    }

    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
    }

    private afterDataStateChange({skip, take, sort}: DataStateChangeEvent) {
        this.skip = skip;
        this.pageSize = take;
        this.sort = sort;
    }

    onEdit(data: WordModel) {
        this.router.navigate(['/dashboard', data._id]);

        return false;
    }

    onRemove(data: WordModel) {
        // remove here
        this.dashboardSrv
            .removeWord(data._id)
            .then(d => this.dashboardSrv.query({skip: this.skip, take: this.pageSize}))
            .catch(er => alert(er));

        return false;
    }

    onSubmit() {
        let form = this.el.nativeElement.querySelector("[app-data-upload]");

        this.dashboardSrv
            .uploadFile(new FormData(form))
            .then(d => this.dashboardSrv.query({skip: this.skip, take: this.pageSize}))
            .catch(er => alert(er));

        return false;
    }

    ngOnInit() {

    }
}

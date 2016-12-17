/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Component, OnInit, ElementRef, ViewChild, ViewContainerRef, TemplateRef} from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {Observable} from "rxjs";
import {GridComponent, GridDataResult, DataStateChangeEvent} from "@progress/kendo-angular-grid";
import {SortDescriptor} from "@progress/kendo-data-query";
import {WordModel} from "../../../models/WordModel";
import {DashboardDetailComponent} from "./dashboard-detail/dashboard-detail.component";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    private view: Observable<GridDataResult>;
    private pageSize: number = 20;
    private skip: number  = 0;

    @ViewChild(GridComponent) private grid: GridComponent;
    @ViewChild(DashboardDetailComponent) private detail: DashboardDetailComponent;

    private sort;
    private selectedItem: WordModel = WordModel.Create();
    private openedItemDetail: boolean = false;

    constructor(private dashboardSrv: DashboardService, private el: ElementRef) {
        this.view = dashboardSrv;

        this.dashboardSrv.query({ skip: this.skip, take: this.pageSize, sort: this.sort });
    }

    public ngAfterViewInit(): void {

        this.detail.closeDialog
            .subscribe(this.onCloseDialog.bind(this));

        this.grid.dataStateChange
            .do(this.afterDataStateChange.bind(this))
            .subscribe(x => this.dashboardSrv.query(x));
    }

    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
    }

    private afterDataStateChange({ skip, take }: DataStateChangeEvent) {
        this.skip = skip;
        this.pageSize = take;
    }

    /**
     *
     * @param item
     * @returns {boolean}
     */
    onGridItemSave(item: any) {
        this.dashboardSrv
            .updateWord(item)
            .then(() => {
                this.dashboardSrv.query({ skip: this.skip, take: this.pageSize })
            })
            .catch((er) => {
                alert(er);
            });

        return false;
    }

    onEdit(data: WordModel){
        this.selectedItem = data;
        this.detail.openDialog(data);

        return false;
    }

    onRemove(data: WordModel){
        // remove here
        return false;
    }

    onCloseDialog(){
        this.openedItemDetail = false;
    }

    onSubmit() {
        let form = this.el.nativeElement.querySelector("[app-data-upload]");

        this.dashboardSrv
            .uploadFile(new FormData(form))
            .then(d => this.dashboardSrv.query({ skip: this.skip, take: this.pageSize }))
            .catch(er => alert(er));

        return false;
    }

    ngOnInit() {

    }
}

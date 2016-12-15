/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Component, OnInit, ElementRef, ViewChild, ViewContainerRef, TemplateRef} from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {Observable} from "rxjs";
import {GridComponent, GridDataResult, DataStateChangeEvent} from "@progress/kendo-angular-grid";
import {SortDescriptor} from "@progress/kendo-data-query";

@Component({
    selector: 'dashboard',
    templateUrl: './Dashboard.component.html',
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    private view: Observable<GridDataResult>;
    private pageSize: number = 5;
    private skip: number  = 0;

    @ViewChild(GridComponent) private grid: GridComponent;
    private sort;

    constructor(private dashboardSrv: DashboardService, private el: ElementRef) {
        this.view = dashboardSrv;

        this.dashboardSrv.query({ skip: this.skip, take: this.pageSize, sort: this.sort });
    }

    public ngAfterViewInit(): void {
        this.grid.dataStateChange
            .do(({ skip, take }: DataStateChangeEvent) => {
                this.skip = skip;
                this.pageSize = take;
            })
            .subscribe(x => this.dashboardSrv.query(x));
    }

    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
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

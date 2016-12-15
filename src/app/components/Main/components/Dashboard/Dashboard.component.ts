/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Component, OnInit, ElementRef, ViewChild, ViewContainerRef, TemplateRef} from '@angular/core';
import {
    WordModel, DataTableOptions, FieldModel, PaginationOptionsModel,
    DataTableOptionsForRequest, MeaningModel, FilterModel
} from "../../../../Models/WordModel";
import {DashboardService} from "./dashboard.service";
import {DataTableRowTemplateDirective} from "../data-table/DataTableRowTemplateDirective";
import {_catch} from "rxjs/operator/catch";

@Component({
    selector: 'dashboard',
    templateUrl: './Dashboard.component.html',
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    submitted = false;

    public tableOptions: DataTableOptions<WordModel> = DataTableOptions.Create<WordModel>();

    @ViewChild("headerTmpl", {read: DataTableRowTemplateDirective}) gridHeader;
    @ViewChild("listTmpl", {read: DataTableRowTemplateDirective}) gridRow;
    @ViewChild("paginationTmpl", {read: DataTableRowTemplateDirective}) gridPagination;

    @ViewChild("modalTmpl", {read: TemplateRef}) modalTemplate;

    private currentItem: {data: WordModel, onSave?: Function, onCancel?: Function} = {
        data: WordModel.Create()
    };

    constructor(private dashboardSrv: DashboardService, private el: ElementRef) {
        let source: WordModel[] = [];

        let fields: FieldModel[] = [
            {name: "picture", title: "Picture", width: 120},
            {name: "word", title: "Word"},
            {name: "meanings", title: "Meanings count", width: 120},
            {name: "audio", title: "Audio", width: 120},
            {name: "date", title: "Date", width: 200}
        ];

        this.tableOptions.dataSource = source;
        this.tableOptions.fields = fields;
        this.tableOptions.pagination = PaginationOptionsModel.Create({
            offset: 0,
            limit: 10
        });

        this.currentItem.onSave = this.onGridItemSave.bind(this);
        this.currentItem.onCancel = this.onGridItemCancel.bind(this);

        this._read();
    }

    onPaginationChange($event){
        this.tableOptions.pagination = $event;
        this._read();
    }

    getCurrentItem(): {data: WordModel} {
        return this.currentItem;
    }

    /**
     *
     * @param item
     * @returns {boolean}
     */
    onGridItemSave(item: WordModel) {
        this.dashboardSrv
            .updateWord(item)
            .then(() => {
                this._read();
                $("#modal1").modal("close");
            })
            .catch((er) => {
                $("#modal1").modal("close");
                alert(er);
            });

        return false;
    }

    onGridItemCancel() {
        this.currentItem.data = WordModel.Create();
        return false;
    }

    onGridItemClick(e: any, data: WordModel) {
        this.currentItem.data = data;
        $("#modal1").modal("open");
        return false;
    }

    onSubmit() {
        let form = this.el.nativeElement.querySelector("[app-data-upload]");

        this.dashboardSrv
            .uploadFile(new FormData(form))
            .then(d => this._read())
            .catch(er => alert(er));

        return false;
    }

    ngOnInit() {
        $("#modal1").modal();
    }

    private _read() {
        let options = DataTableOptionsForRequest.Create(this.tableOptions.getOptionsForRequest());

        return this.dashboardSrv
            .getWords(options)
            .then(opt => this.tableOptions.merge(opt));
    }
}

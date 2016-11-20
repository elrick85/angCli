/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Component, OnInit, ElementRef, ViewChild, ViewContainerRef, TemplateRef} from '@angular/core';
import {
    WordModel, DataTableOptions, FieldModel, PaginationOptionsModel,
    DataTableOptionsForRequest
} from "../../../../Models/WordModel";
import {DashboardService} from "./dashboard.service";
import {DataTableRowTemplateDirective} from "../data-table/DataTableRowTemplateDirective";

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
        data: new WordModel()
    };

    constructor(private dashboardSrv: DashboardService, private el: ElementRef) {
        let source: WordModel[] = [];

        let fields: FieldModel[] = [
            {name: "picture", title: "Picture"},
            {name: "word", title: "Word/Translation"},
            {name: "transcription", title: "Transcription"},
            {name: "example", title: "Example"},
            {name: "audio", title: "Audio"}
        ];

        this.tableOptions.dataSource = source;
        this.tableOptions.fields = fields;
        this.tableOptions.pagination = PaginationOptionsModel.Create({
            offset: 0,
            limit: 10
        });

        this.currentItem.onSave = this.onGridItemSave.bind(this);
        this.currentItem.onCancel = this.onGridItemCancel.bind(this);
    }

    getCurrentItem(): {data: WordModel} {
        return this.currentItem;
    }

    onGridItemSave(item: WordModel) {
        console.log("SAVE: ", item);
        $("#modal1").modal("close");
        return false;
    }

    onGridItemCancel() {
        this.currentItem.data = new WordModel();
        return false;
    }

    onGridItemClick(e: any, data: WordModel) {
        this.currentItem.data = data;
        $("#modal1").modal("open");
        return false;
    }

    onSubmit() {
        this.submitted = true;

        let form = this.el.nativeElement.querySelector("[app-data-upload]");

        this.dashboardSrv
            .uploadFile(new FormData(form))
            .then(d => this.submitted = true)
            .catch(er => alert(er));

        return false;
    }

    ngOnInit() {
        $("#modal1").modal();
        this.dashboardSrv.testApi();

        let options = DataTableOptionsForRequest.Create(this.tableOptions.getOptionsForRequest());

        this.dashboardSrv
            .getWords(options)
            .then(opt => this.tableOptions.merge(opt));
    }
}

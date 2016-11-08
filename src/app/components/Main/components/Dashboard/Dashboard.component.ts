/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Component, OnInit, ElementRef} from '@angular/core';
import {
    WordModel, DataTableOptions, FieldModel, PaginationOptionsModel,
    DataTableOptionsForRequest
} from "../../../../Models/WordModel";
import {DashboardService} from "./dashboard.service";

@Component({
    selector: 'dashboard',
    templateUrl: './Dashboard.component.html',
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    submitted = false;

    public tableOptions: DataTableOptions<WordModel> = DataTableOptions.Create<WordModel>();

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
        let options = DataTableOptionsForRequest.Create(this.tableOptions.getOptionsForRequest());

        this.dashboardSrv
            .getWords(options)
            .then(opt => this.tableOptions.merge(opt));
    }
}

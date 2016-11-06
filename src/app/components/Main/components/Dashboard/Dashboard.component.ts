/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Component, OnInit} from '@angular/core';
import {WordModel, DataTableOptions, FieldModel} from "../../../../Models/WordModel";
import {DashboardService} from "./dashboard.service";

@Component({
    selector: 'dashboard',
    templateUrl: './Dashboard.component.html',
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    public hello: string;

    public tableOptions: DataTableOptions<WordModel> = DataTableOptions.Create<WordModel>();

    constructor(private dashboardSrv: DashboardService) {
        this.hello = 'Hello World!';

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

    }

    ngOnInit() {
        this.dashboardSrv
            .getWords()
            .then((data:WordModel[]) => {this.tableOptions.dataSource = data});
    }
}

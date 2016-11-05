/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */


import {Component, OnInit} from '@angular/core';
import {WordModel, DataTableOptions, FieldModel} from "../../../../Models/WordModel";

@Component({
    selector: 'dashboard',
    templateUrl: './Dashboard.component.html',

})
export class DashboardComponent implements OnInit {
    public hello: string;

    public tableOptions: DataTableOptions<WordModel> = DataTableOptions.Create<WordModel>();

    constructor() {
        this.hello = 'Hello World!';

        let source: WordModel[] = [
            {word: "hello", trans: "привет"}
        ];

        let fields:FieldModel[] = [
            {name: "word", title: "Word"},
            {name: "trans", title: "Translation"}
        ];

        this.tableOptions.dataSource = source;
        this.tableOptions.fields = fields;

    }

    ngOnInit() {

    }
}

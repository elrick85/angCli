import {Component, OnInit, Input} from '@angular/core';
import {IDataTableOptions} from "../../../../Models/WordModel";
import {Observable} from "rxjs";

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

    @Input() options: IDataTableOptions;

    template: string;

    constructor() {

    }

    ngOnInit() {
    }

}

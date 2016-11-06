import {Component, OnInit, Input} from '@angular/core';
import {FieldModel} from "../../../../Models/WordModel";

@Component({
    selector: '[app-data-table-header]',
    templateUrl: './data-table-header.component.html',
    styleUrls: ['./data-table-header.component.css']
})
export class DataTableHeaderComponent implements OnInit {

    @Input() col: FieldModel;

    constructor() {
    }

    ngOnInit() {
    }

}

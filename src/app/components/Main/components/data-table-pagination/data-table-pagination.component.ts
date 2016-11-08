import {Component, OnInit, Input} from '@angular/core';
import {PaginationOptionsModel} from "../../../../Models/WordModel";

@Component({
    selector: '[app-data-table-pagination]',
    templateUrl: './data-table-pagination.component.html',
    styleUrls: ['./data-table-pagination.component.css']
})
export class DataTablePaginationComponent implements OnInit {

    @Input() options: PaginationOptionsModel;

    constructor() {
    }

    ngOnInit() {

    }
}

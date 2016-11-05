import {Component, OnInit, Input} from '@angular/core';
import {WordModel} from "../../../../Models/WordModel";

@Component({
    selector: 'app-data-table-item',
    templateUrl: './data-table-item.component.html',
    styleUrls: ['./data-table-item.component.css']
})
export class DataTableItemComponent implements OnInit {
    @Input("item") data: WordModel;

    constructor() { }

    ngOnInit() {

    }

}

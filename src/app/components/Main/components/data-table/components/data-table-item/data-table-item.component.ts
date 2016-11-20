import {Component, OnInit, Input, Directive} from '@angular/core';
import {WordModel} from "../../../../../../Models/WordModel";

@Component({
    selector: '[app-data-table-item]',
    templateUrl: 'data-table-item.component.html',
    styleUrls: ['data-table-item.component.css']
})
export class DataTableItemComponent implements OnInit {
    @Input("item") data: WordModel;

    @Input("onClick") _onClick: Function;

    constructor() { }

    onClick($event, data) {
        this._onClick($event, this.data);
        return false;
    }

    ngOnInit() {

    }

}

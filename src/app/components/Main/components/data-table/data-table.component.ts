import {Component, OnInit, Input, TemplateRef, ViewChild, ViewContainerRef, EmbeddedViewRef} from '@angular/core';
import {IDataTableOptions, DataTableOptions} from "../../../../Models/WordModel";
import {Observable} from "rxjs";
import {DataTableRowTemplateDirective} from "./DataTableRowTemplateDirective";

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

    @Input() options: DataTableOptions<any>;
    @Input() headerTemplate: DataTableRowTemplateDirective;
    @Input() rowTemplate: DataTableRowTemplateDirective;
    @Input() paginationTemplate: DataTableRowTemplateDirective;

    constructor() {
    }

    ngOnInit () {

    }

}

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {WordModel} from "../../../../models/WordModel";

@Component({
    selector: 'dashboard-detail',
    templateUrl: './dashboard-detail.component.html',
    styleUrls: ['./dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit {

    data: any;
    closeDialog: EventEmitter<any>;
    private opened: boolean;

    constructor() {
        this.closeDialog = new EventEmitter();
    }

    close() {
        this.opened = false;
        this.closeDialog.emit();
    }

    openDialog(data) {
        this.data = data;
        this.opened = true;
    }

    ngOnInit() {

    }
}

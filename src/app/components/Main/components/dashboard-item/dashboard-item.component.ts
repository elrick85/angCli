import {Component, OnInit, Input} from '@angular/core';
import {WordModel} from "../../../../Models/WordModel";

@Component({
  selector: '[app-dashboard-item]',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {

    @Input("item") data: WordModel;

    @Input("clickHandler") _onClick: Function;

    constructor() { }

    onClick($event, data) {
        this._onClick($event, this.data);
        return false;
    }

    ngOnInit() {

    }

}

import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {DashboardService} from "../dashboard.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: '[app-data-upload]',
    templateUrl: './data-upload.component.html',
    styleUrls: ['./data-upload.component.css'],
    providers: [DashboardService]
})
export class DataUploadComponent implements OnInit {

    constructor(private dashboardSrv: DashboardService) {
    }

    ngOnInit() {
        //this.form.onSubmit = this.onSubmit;
    }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {DashboardService} from "../Dashboard/dashboard.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-data-upload',
    templateUrl: './data-upload.component.html',
    styleUrls: ['./data-upload.component.css'],
    providers: [DashboardService]
})
export class DataUploadComponent implements OnInit {
    @ViewChild("uploadForm") element: NgForm;

    submitted = false;

    constructor(private dashboardSrv: DashboardService) {

    }

    onSubmit() {
        this.submitted = true;
        //debugger;
        //e.preventDefault();

        //this.dashboardSrv.uploadFile(this.element);

        return false;
    }

    ngOnInit() {
        //this.element.onSubmit = this.onSubmit;
    }

}

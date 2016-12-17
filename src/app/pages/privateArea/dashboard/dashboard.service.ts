/**
 * Created by zauri_000 on 07.11.2016.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {
    WordModel, DataTableOptionsForRequest, DataTableOptions,
    PaginationOptionsModel
} from "../../../models/WordModel";
import {Observable, BehaviorSubject} from "rxjs";
import {GridDataResult} from "@progress/kendo-angular-grid";

@Injectable()
export class DashboardService extends BehaviorSubject<GridDataResult> {

    private wordsUrl = "/api/getList";
    private uploadUrl = "/api/upload";
    private updateUrl = "/api/update";

    private BASE_URL: string = 'http://services.odata.org/V4/Northwind/Northwind.svc/';
    private tableName: string = "Categories";

    constructor(private http: Http) {
        super(null);
    }

    public query(state) {
        this.getWords(state)
            .subscribe(x => super.next(x));
    }

    getWords(state: any): Observable<GridDataResult> {
        return this.http
            .post(`${this.wordsUrl}`, state)
            .map(response => response.json())
            .map(response => (<GridDataResult>{
                data: response.data,
                total: parseInt(response.pagination.total, 10)
            }));
    }

    updateWord(data:WordModel){
        return this.http.post(this.updateUrl, data)
            .toPromise()
            .catch(this.handleError);
    }

    uploadFile(data): Promise<Boolean> {
        var headers = new Headers();

        return this.http
            .post(this.uploadUrl, data)
            .toPromise()
            .then(data => true)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
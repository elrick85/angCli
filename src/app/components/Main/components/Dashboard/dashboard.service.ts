/**
 * Created by zauri_000 on 07.11.2016.
 */

import {Injectable, ViewChild} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {
    WordModel, DataTableOptionsForRequest, DataTableOptions,
    PaginationOptionsModel
} from "../../../../Models/WordModel";
import {Observable, BehaviorSubject} from "rxjs";
import {GridDataResult} from "@progress/kendo-angular-grid";
import {toODataString} from "@progress/kendo-data-query";

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
        this.fetch(this.tableName, state)
            .subscribe(x => super.next(x));
    }

    private fetch(tableName: string, state: any): Observable<GridDataResult> {
        return this.http
            .post(`${this.wordsUrl}`, state)
            .map(response => response.json())
            .map(response => (<GridDataResult>{
                data: response.data,
                total: parseInt(response.pagination.total, 10)
            }));
    }

    getWords(options: DataTableOptionsForRequest): Promise<DataTableOptions<WordModel>> {
        return this.http.post(this.wordsUrl, options.buildQuery())
            .toPromise()
            .then((responce) => {

            })
            .catch(this.handleError);
    }

    getMeanings(options: DataTableOptionsForRequest): Promise<DataTableOptions<WordModel>> {
        return this.http.post(this.wordsUrl, options.buildQuery())
            .toPromise()
            .then((responce) => {
                let _res = responce.json();

                var tbl = DataTableOptions.Create<WordModel>();
                tbl.dataSource = _res.data as WordModel[];
                tbl.pagination = _res.pagination as PaginationOptionsModel;

                return tbl;
            })
            .catch(this.handleError);
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
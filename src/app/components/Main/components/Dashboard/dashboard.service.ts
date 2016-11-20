/**
 * Created by zauri_000 on 07.11.2016.
 */

import {Injectable, ViewChild} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {
    WordModel, DataTableOptionsForRequest, DataTableOptions,
    PaginationOptionsModel
} from "../../../../Models/WordModel";
import {Observable} from "rxjs";
import {DataTableRowTemplateDirective} from "../data-table/DataTableRowTemplateDirective";

@Injectable()
export class DashboardService {

    wordsUrl = "/api/getList";
    uploadUrl = "/api/upload";

    constructor(private http: Http) {
    }

    getWords(options: DataTableOptionsForRequest): Promise<DataTableOptions<WordModel>> {
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

    uploadFile(data): Promise<Boolean> {
        var headers = new Headers();

        return this.http
            .post(this.uploadUrl, data)
            .toPromise()
            .then(data => true)
            .catch(this.handleError);
    }

    testApi(){
        return this.http.get("/api").toPromise();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
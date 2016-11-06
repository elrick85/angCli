/**
 * Created by zauri_000 on 07.11.2016.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {WordModel} from "../../../../Models/WordModel";
import {Observable} from "rxjs";

@Injectable()
export class DashboardService {

    wordsUrl = "/api/getList";
    uploadUrl = "/api/upload";

    constructor(private http: Http) {
    }

    getWords(): Promise<WordModel[]> {
        return this.http.get(this.wordsUrl)
            .toPromise()
            .then(response => response.json() as WordModel[])
            .catch(this.handleError);
    }

    uploadFile(data): Promise<Boolean> {
        var headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');

        return this.http
            .post(this.uploadUrl, data, {headers: headers})
            .toPromise()
            .then(data => true)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
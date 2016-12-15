import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {PaginationOptionsModel} from "../../../../../../Models/WordModel";

@Component({
    selector: '[app-data-table-pagination]',
    templateUrl: 'data-table-pagination.component.html',
    styleUrls: ['data-table-pagination.component.css']
})
export class DataTablePaginationComponent implements OnInit {

    @Input() options: PaginationOptionsModel;

    @Output() onPaginationChange = new EventEmitter();

    pageSize: number;

    pageNum: number;

    pageSizeList: Array<number> = [5, 10, 20, 30];

    pageNumberList: Array<number> = [];

    pageLimit: number = 10;

    disableRightArrow: boolean;
    disableLeftArrow: boolean;

    constructor() {
    }

    onChangePageSize(event: number) {
        this.pageSize = +event;
        this.options.limit = +event;
        this.onPaginationChange.emit(this.options);

    }

    onChangePageNumber(pageNum) {
        this.options.setPage(+pageNum);
        this.pageNum = +pageNum;
        this.onPaginationChange.emit(this.options);

        return false;
    }

    movePrev(){
        if(!this.disableLeftArrow){
            this.options.setPage(this.pageNum - 1);
            this.onPaginationChange.emit(this.options);
        }

        return false;
    }

    moveNext() {
        if(!this.disableRightArrow){
            this.options.setPage(this.pageNum + 1);
            this.onPaginationChange.emit(this.options);
        }

        return false;
    }

    ngOnInit() {
        if(this.options.total) {
            this.options = PaginationOptionsModel.Create(this.options);

            this.pageSize = this.options.limit;
            this.pageNum = this.options.pageNumber();

            let i = this.options.getPageCount();
            let averagePageLimit = Math.ceil(this.pageLimit / 2);
            let arr: Array<number> = [];
            let m = i;

            while (m--) {
                arr.push(m+1);
            }

            let _arr = arr.reverse();

            let index = _arr.indexOf(this.pageNum);

            if(index === -1) {
                this.options.setPage(1);
                this.onPaginationChange.emit(this.options);

                return;
            }

            this.disableLeftArrow = index === 0;
            this.disableRightArrow = index === (_arr.length-1);

            if(_arr.length < this.pageLimit){
                this.pageNumberList = _arr;
                return;
            }

            let start = index - averagePageLimit + 1;
            let end = index + averagePageLimit + 1;

            if(start <= 0) {
                start = 0;
            }

            if(end > i) {
                end = i;
            } else {
                if(this.pageNum <= averagePageLimit){
                    end = this.pageLimit;
                }
            }

            //this.pageNumberList = _arr.slice(start, end);
            this.pageNumberList = _arr.slice(start ? start-1 : start, end ? end-1 : end);
        }
    }
}

/**
 * Created by zauri_000 on 05.11.2016.
 */

export class WordModel {
    _id: string;

    word: string;

    transcription: string;

    audio: string;

    meanings: [MeaningModel];

    date: Date;

    createMeaningsDataSource(){
    }

    static Create() {
        let item = new WordModel();
        item.meanings = [new MeaningModel()];

        return item;
    }
}
export class MeaningModel {
    _id: string;

    trans: string;

    picture: string;

    example: string;

    date: Date;
}

export interface IPaginationOptionsModel {
    offset: number;

    limit: number;
}

export class PaginationOptionsModel implements IPaginationOptionsModel {
    total: number;

    offset: number;

    limit: number;

    pageNumber(): number {
        var page = Math.floor(this.offset / this.limit);

        return page + 1;
    }

    static Create(opt: IPaginationOptionsModel) {
        let pModel = new PaginationOptionsModel();
        pModel.total = 0;
        pModel.offset = opt.offset;
        pModel.limit = opt.limit;

        return pModel;
    }
}

export interface IDataTableOptionsForRequest {
    pagination: PaginationOptionsModel;

    sort: any;

    data: any;
}

export class DataTableOptionsForRequest implements IDataTableOptionsForRequest {
    pagination: PaginationOptionsModel;

    sort: any;

    data: any;

    buildQuery(): any {
        return {
            limit: this.pagination.limit,
            offset: this.pagination.offset
        };
    }

    static Create(options: IDataTableOptionsForRequest) {
        let inst = new DataTableOptionsForRequest();

        inst.pagination = options.pagination;
        inst.sort = options.sort;
        inst.data = options.data;

        return inst;
    }
}

export interface IDataTableOptions extends IDataTableOptionsForRequest {
    dataSource: any;

    fields: FieldModel[];

    pagination: PaginationOptionsModel;
}

export class DataTableOptions<T> extends DataTableOptionsForRequest implements IDataTableOptions {

    dataSource: T[];

    filter?: FilterModel[];

    fields: FieldModel[];

    getOptionsForRequest(): IDataTableOptionsForRequest {
        return {
            data: this.data,
            sort: this.sort,
            pagination: this.pagination
        };
    }

    merge(inst: DataTableOptions<T>) {
        this.dataSource = inst.dataSource;
        this.pagination = inst.pagination;
    }

    static Create<T>() {
        return new DataTableOptions<T>();
    }
}

export class FieldModel {
    name: string;

    title: string;
}

export class FilterModel {
    name: string;

    condition?: string;

    value: string;
}
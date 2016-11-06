/**
 * Created by zauri_000 on 05.11.2016.
 */

export class WordModel {
    word: string;

    trans: string;

    picture: string;

    transcription: string;

    example: string;

    audio: string;
}

export interface IDataTableOptions {
    dataSource: any;

    fields: FieldModel[];
}

export class DataTableOptions<T> implements IDataTableOptions {
    dataSource: T[];

    fields: FieldModel[];

    static Create<T>(){
        return new DataTableOptions<T>();
    }
}

export class FieldModel {
    name: string;

    title: string;
}
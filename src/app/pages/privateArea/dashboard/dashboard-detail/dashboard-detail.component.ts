import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {WordModel} from "../../../../models/WordModel";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
    selector: 'dashboard-detail',
    templateUrl: './dashboard-detail.component.html',
    styleUrls: ['./dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit {

    data: WordModel;
    closeDialog: EventEmitter<any>;
    saveDialog: EventEmitter<any>;
    private opened: boolean;

    form: FormGroup;

    constructor(private builder: FormBuilder) {
        this.closeDialog = new EventEmitter();
        this.saveDialog = new EventEmitter();
        this.form = this.builder.group(new WordModel());
    }

    close() {
        this.opened = false;
        this.closeDialog.emit();
    }

    openDialog(data: WordModel) {
        this.data = data as WordModel;

        this.form = this.builder.group({
            word: this.data.word,
            transcription: this.data.transcription,
            meanings: this.builder.array(this.data.meanings.map((v) => this.builder.group(v)))
        });

        this.opened = true;
    }

    onSave(form: FormGroup){
        this.saveDialog.emit(form.value);
        this.close();
        return false;
    }

    onCancel(){
        this.close();
        return false;
    }

    ngOnInit() {

    }
}

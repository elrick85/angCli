import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, FormArray} from "@angular/forms";
import {WordModel, MeaningModel} from "../../models/WordModel";

@Component({
    selector: 'dashboard-detail',
    templateUrl: './dashboard-detail.component.html',
    styleUrls: ['./dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit {

    data: WordModel = WordModel.Create();
    saveDialog: EventEmitter<any>;
    cancelDialog: EventEmitter<any>;
    form: FormGroup;

    constructor(private builder: FormBuilder) {
        this.cancelDialog = new EventEmitter();
        this.saveDialog = new EventEmitter();
        this.form = this.builder.group(this.data);
    }

    openDialog(data: WordModel) {
        this.data = data as WordModel;

        let _data = JSON.parse(JSON.stringify(this.data));
        _data.meanings = this.builder.array(this.data.meanings.map((v) => {
            let _v = JSON.parse(JSON.stringify(v));
            _v.date = new Date(v.date);

            return this.builder.group(_v);
        }));

        this.form = this.builder.group(_data);
    }

    onAdd(){
        let control = <FormArray>this.form.controls["meanings"];

        control.push(this.initMeaning());

        return false;
    }

    private initMeaning(): FormGroup{
        let controlsConfig = MeaningModel.CreateEmpty();

        return this.builder.group(controlsConfig);
    }

    onSave(form: FormGroup){
        this.saveDialog.emit(form.value);
        return false;
    }

    onRemove(index: number) {
        let control = <FormArray>this.form.controls["meanings"];

        control.removeAt(index);
        this.saveDialog.emit(this.form.value);

        return false;
    }

    onCancel(){
        this.cancelDialog.emit();
        return false;
    }

    ngOnInit() {

    }
}
/**
 * Created by zauri_000 on 20.11.2016.
 */

import {TemplateRef, Directive} from "@angular/core";

@Directive({
    selector: '[data-table-row-template]',
    exportAs: 'data-table-row-template'
})
export class DataTableRowTemplateDirective {
    constructor(public templateRef: TemplateRef<{message:string}>) {

    }
}
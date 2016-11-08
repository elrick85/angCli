/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataTablePaginationComponent } from './data-table-pagination.component';

describe('DataTablePaginationComponent', () => {
  let component: DataTablePaginationComponent;
  let fixture: ComponentFixture<DataTablePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTablePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

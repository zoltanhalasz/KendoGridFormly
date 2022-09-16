import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FieldArrayType } from '@ngx-formly/core';
import { GridComponent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'formly-field-kendo-grid',
  templateUrl: './grid.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KendoGridComponent extends FieldArrayType implements OnInit {

  @ViewChild('grid')
  grid: GridComponent;

  isEditMode = false;
  datatable = [];

  ngOnInit() {
    console.log(this.field);
    console.log(this.model);
  }
  onEdit() {
    // store copy of original products in case cancelled
    this.datatable = [...this.formControl.value];
    // set all rows to edit mode to display form fields
    this.editAllRows();
    this.isEditMode = true;
  }

  override add(i?: number, initialModel?: any, { markAsDirty } = { markAsDirty: true }): void {
    super.add(i, initialModel, { markAsDirty });
    this.editAllRows();
  }

   onSave() {
    // mark all fields as touched to highlight any invalid fields
    this.formControl.markAllAsTouched();
    this.closeAllRows();
    this.isEditMode = false;
  }

  onCancel() {

    this.closeAllRows();
    // reset products back to original data (before edit was clicked)
    this.formControl.reset(this.datatable, { emitEvent: true, onlySelf: false });
    this.isEditMode = false;
    this.grid.data = this.model;
  }

  // helper methods

  private editAllRows() {
    // set all rows to edit mode to display form fields
    this.model.forEach((x, i) => {
      this.grid.editRow(i, this.formControl.controls[i] as FormGroup);
    });
  }

  private closeAllRows() {
    // close all rows to display readonly view of data
    this.model.forEach((x, i) => {
      this.grid.closeRow(i);
    });
  }
}

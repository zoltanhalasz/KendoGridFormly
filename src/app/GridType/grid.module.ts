import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { GridModule } from "@progress/kendo-angular-grid";
import { KendoGridComponent } from "./grid.type";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [KendoGridComponent],
  exports: [ MatInputModule, MatFormFieldModule],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridModule,
    MatInputModule,
    MatFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'grid',
          component: KendoGridComponent,
          //wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyGridModule { }

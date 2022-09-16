import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KendoGridFormly';
  form = new FormGroup({});

  model: any = {
    name: 'name',
    value: 'value',
    datalist: [
      {
        name: 'name1',
        value: 'value1',
      },
      {
        name: 'name2',
        value: 'value2',
      },
    ],
  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<h5>Personal data</h5>',
    },
    {
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          className: 'col-md-3',
          props: {
            label: 'name',
            required: true,
          },
        },
        {
          key: 'value',
          type: 'input',
          className: 'col-md-3',
          props: {
            label: 'value',
          },
        },
      ],
    },
    {
      key: 'datalist',
      type: 'grid',
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'name',
            props: {
              required: true,
            },
          },
          {
            type: 'input',
            key: 'value',
            props: {
            },
          }
        ],
      },
    },
  ];

  onSubmit(model: any) {
    model.datalist.push({ name: model.name, value: model.value });
    model.name = '';
    model.value = '';
  }
}

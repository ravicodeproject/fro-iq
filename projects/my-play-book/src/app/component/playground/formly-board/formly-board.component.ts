import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { WidgetName, WidgetService } from '../../../service/widget.service';
import { default as TypesFormlyFields } from './config/types.formly.json';
import { cloneDeep as _cloneDeep } from 'lodash';

@Component({
  selector: 'app-formly-board',
  templateUrl: './formly-board.component.html',
  styleUrls: ['./formly-board.component.scss']
})
export class FormlyBoardComponent implements OnInit {
  formlyTypesForm = new FormGroup({});
  formlyWidgetForm = new FormGroup({});

  model = { email: 'email@gmail.com', custom: 'custom value', 'custom-one':'custom one value' };

  formlyTypesFields: FormlyFieldConfig[] = [];
  formlyWidgetFields: FormlyFieldConfig[] = [];

  constructor(
    private route: ActivatedRoute,
    private widgetService: WidgetService) {
  }

  ngOnInit(): void {
    this.formlyTypesFields = _cloneDeep(TypesFormlyFields);

    const emailTemplate = this.widgetService.get(WidgetName.EMAIL) as FormlyFieldConfig;
    emailTemplate.key = "email";

    this.formlyWidgetFields = [
      emailTemplate
    ]
  }
}

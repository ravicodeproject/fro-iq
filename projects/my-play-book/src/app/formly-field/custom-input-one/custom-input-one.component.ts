import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-input-one',
  templateUrl: './custom-input-one.component.html',
  styleUrls: ['./custom-input-one.component.scss']
})
export class CustomInputOneComponent  extends FieldType<FieldTypeConfig> {

  get type() {
    return this.to.type || 'text';
  }
  get label() {
    return this.to.label || 'label text';
  }

  ngOnInit(): void {
  }

}

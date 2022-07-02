import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { default as TypesFormlyFields } from './config/topic.formly.json';
import { cloneDeep as _cloneDeep} from 'lodash';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [];
  constructor(private route:ActivatedRoute) { 
    console.log(route.params);
    console.log(route.snapshot.params['bookname']);
    console.log(route.snapshot.params['topicname']);
  }

  ngOnInit(): void {
    this.fields = _cloneDeep(TypesFormlyFields);    
    console.log(this.fields);
  }

  onSubmit(model: any) {
    console.log(model);
  }
}

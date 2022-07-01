import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };

  constructor(private route:ActivatedRoute) { 
    console.log(route.params);
    console.log(route.snapshot.params['bookname']);
    console.log(route.snapshot.params['topicname']);
  }

  ngOnInit(): void {
  }
 
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}

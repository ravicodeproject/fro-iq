import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
 import { WidgetName, WidgetService } from '../../service/widget.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  formlyWidgetForm = new FormGroup({});
  formlyWidgetFields: FormlyFieldConfig[] = [];

  model = { 
    email: 'email@gmail.com', 
    custom: 'custom value', 
    'custom-one': 'custom one value', 
    topics: [
      { investmentName: "test1" }, 
      { investmentName: "test2" }
    ] 
  };

  constructor(private route:ActivatedRoute, private widgetService:WidgetService) { 
    console.log(route.params);
    console.log(route.snapshot.params['bookname']);
    console.log(route.snapshot.params['topicname']);

    const topicTemplate = this.widgetService.get(WidgetName.TOPIC) as FormlyFieldConfig;
    topicTemplate.key = "topics";

    this.formlyWidgetFields = [
      topicTemplate
    ]
  }

  ngOnInit(): void {}
}

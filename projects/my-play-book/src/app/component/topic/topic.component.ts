import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { RepositoryService } from '../../service/repository.service';
import { WidgetName, WidgetService } from '../../service/widget.service';

interface comment {
  id: number,
  body: string,
  postId: number
}

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

  constructor(
    private route: ActivatedRoute,
    private widgetService: WidgetService,
    private repo: RepositoryService
  ) {
    console.log(route.params);
    console.log(route.snapshot.params['bookname']);
    console.log(route.snapshot.params['topicname']);

    const topicTemplate = this.widgetService.get(WidgetName.TOPIC) as FormlyFieldConfig;
    topicTemplate.key = "topics";

    this.formlyWidgetFields = [
      topicTemplate
    ]
  }

  ngOnInit(): void { }

  get() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let comments = this.repo.get<comment[]>("http://localhost:3000/comments", { headers: headers });
    comments.subscribe((comments: comment[]) => {
      console.log(comments);
    });
  }

  post(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body={
      body:"this is comment",
      postId:1
    };
    this.repo.create<comment>("http://localhost:3000/comments",body,{headers}).subscribe(
      (comment)=>{
        console.log(comment);
      }
    )
  }

  put(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body={
      body:"this is comment",
      postId:1
    };
    this.repo.update<comment>("http://localhost:3000/comments/1",body,{headers}).subscribe(
      (comment)=>{
        console.log(comment);
      }
    )
  }
  delete(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.repo.delete<comment>("http://localhost:3000/comments/1",{headers}).subscribe(
      (comment)=>{
        console.log(comment);
      }
    )
  }
}

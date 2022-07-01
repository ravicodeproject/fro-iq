import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.scss']
})
export class BookContentComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 
    console.log(route.params);
    console.log(route.snapshot.params['bookname']);
    console.log(route.snapshot.params['topicname']);
  }

  ngOnInit(): void {
  }

}

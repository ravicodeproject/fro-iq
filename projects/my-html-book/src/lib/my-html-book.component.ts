import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-html-book',
  template: `
    <p>
      my-html-book works!
    </p>
  `,
  styles: [
  ]
})
export class MyHtmlBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

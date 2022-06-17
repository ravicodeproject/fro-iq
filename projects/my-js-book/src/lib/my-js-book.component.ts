import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-js-book',
  template: `
    <p>
      my-js-book works!
    </p>
  `,
  styles: [
  ]
})
export class MyJsBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

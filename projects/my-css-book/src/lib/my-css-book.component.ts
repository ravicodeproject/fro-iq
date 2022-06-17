import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-css-book',
  template: `
    <p>
      my-css-book works!
    </p>
  `,
  styles: [
  ]
})
export class MyCssBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-ng-lib',
    template: `
    <p>
      ng-lib works!
    </p>
  `,
    styles: [],
    standalone: true
})
export class NgLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, inject } from '@angular/core';
import { NgLibService } from './ng-lib.service';

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

  service = inject(NgLibService);

  ngOnInit(): void {
    this.service.test();
  }

}

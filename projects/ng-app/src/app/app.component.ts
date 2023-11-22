import { Component, ViewEncapsulation } from '@angular/core';
import { TestComponent } from './comp/test/test.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    standalone: true,
    imports: [TestComponent]
})
export class AppComponent {
  title = 'ng-app';
}

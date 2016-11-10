import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
  // [ ] means propery binding - Component to DOM
  // ( ) means event binding - DOM to Component
  title = 'Customer App';
  name = 'Ward';
  wardsColor = 'green';
  customers: [
    { id: '1', name: 'Boris' },
    { id: '2', name: 'Vivian' },
    { id: '3', name: 'Robert' },
    { id: '4', name: 'Paul' },
    { id: '5', name: 'Eva' },
    { id: '6', name: 'Tom' }
    ];

  changeSuitColor(){
    this.wardsColor = this.wardsColor === 'blue' ? 'red' : 'blue';
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
/*
Revising some known stuff from:
Angular: Getting Started (Deborah Kurata)

Property Binding:
<img [src]='product.imageUrl'>
      (1)         (2)

(1) - element property
(2) - template expression

*/
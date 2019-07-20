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
###############################################
<img [src]='product.imageUrl'>
      (1)         (2)

(1) - element property 
(2) - template expression

[] - binding target
'' - binding source

So we're binding from the Component Class property ('') to the element property ([]). It's a one-way binding from the *.ts file to the *.html file.

<img src={{ product.imageUrl }}
<img src='http://openclipart.org/{{product.imageUrl}}'>



*/
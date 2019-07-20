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

Event Binding
################################################

A component listens for user actions using event binding inside the template, for example:

<button (click)='toggleImage()'>
          (1)       (2)

(1), (click) - the name of the bound event is enclosed in parentheses - this is the ***target event***
(2), '' - ***template statement***

If the defined event occurs, the toggleImage() is executed, calling the method in the Class. 

Toggling a button:
##############################################

in template:
<button class="btn btn-primary" (click)='toggleImage()'> 
  {{ showImage ? 'Hide' : 'Show' }} Image
</button>

in class:
toggleImage(): void {
  this.showImage = !this.showImage;
}

Two-way Binding
###############################################
<input [(ngModel)]='listFilter'>

export class ListComponent {
  listFilter: string = 'cart';
}

[] = property binding: we're binding from the component class property ('listFilter') to the element property [ngModel]

AND

() = event binding: we're binding an event of user entering data - (ngModel) - back to the class property ('listFilter') 

[()] - banana in a box



*/
import { ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

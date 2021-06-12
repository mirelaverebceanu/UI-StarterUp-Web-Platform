import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CardDirective } from 'src/app/card.directive';
import { CardComponent } from 'src/app/project/components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [{'image': 'assets/images/slide1.PNG'}, {'image': 'assets/images/slide2.PNG'},{'image': 'assets/images/slide3.PNG'}, {'image': 'assets/images/slide4.PNG'}];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  @ViewChild('container', { read: ViewContainerRef})
  container!: ViewContainerRef; 


  ngOnInit(): void {
  }

  add(): void {  
    // create the component factory  
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CardComponent);  
    // add the component to the view  
    const componentRef = this.container.createComponent(dynamicComponentFactory);  
  }  

}

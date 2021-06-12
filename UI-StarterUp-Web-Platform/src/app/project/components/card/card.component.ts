import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  component(component: any) {
    throw new Error('Method not implemented.');
  }
  data: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [{'image': 'assets/images/slide1.PNG'}, {'image': 'assets/images/slide2.PNG'},{'image': 'assets/images/slide3.PNG'}, {'image': 'assets/images/slide4.PNG'}];

  constructor() { }

  ngOnInit(): void {
  }

}

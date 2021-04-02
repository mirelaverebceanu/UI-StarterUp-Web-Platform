import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  Categories: any = ['Arts', 'Design&Tech', 'Education', 'Energy&GreenTech', 'Environment', 'Fashion',
                    'Food&Beverages', 'Games', 'Health&Fitness', 'Human Rights', 'Local Business', 'Podcast, Blog&Vlog', 'TV', 'Writting&Publishing'];

  Statuses: any = ['Start-up', 'Small Business'];

  typesOfRules: string[] = ['I am at least 18', 'I can verify an adress and bank account', 'I have a debt/credit card'];
  constructor() { }

  ngOnInit(): void {
  }

}

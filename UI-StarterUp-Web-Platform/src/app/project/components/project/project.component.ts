import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/project';
import { RestapiService } from 'src/app/restapi.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  selectedFile!:File;

  Categories: any = ['Arts', 'Design&Tech', 'Education', 'Energy&GreenTech', 'Environment', 'Fashion',
                    'Food&Beverages', 'Games', 'Health&Fitness', 'Human Rights', 'Local Business', 'Podcast, Blog&Vlog', 'TV', 'Writting&Publishing'];

  Statuses: any = ['Start-up', 'Small Business'];

  typesOfRules: string[] = ['I am at least 18', 'I can verify an adress and bank account', 'I have a debt/credit card'];
  constructor(private router:Router, private service: RestapiService) { }

  ngOnInit(): void {
  }

  public project: Project = new Project();

  uploadFile(event: any){
    console.log(event);
    this.selectedFile = event.target.files[0];
    let resp = this.service.uploadFile(this.selectedFile);
    // resp.subscribe((data)=>this.message=data);
    resp.subscribe(data=>{
        console.log(data)
      })
  }

  public create(){
    let resp = this.service.createProject(this.project);
    resp.subscribe(data=>{
      console.log(data)
    })
    this.router.navigate(['/home']);
  }

}

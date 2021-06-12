import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/restapi.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  selectedFile!:File;
  constructor(private service: RestapiService) { }

  ngOnInit(): void {
  }

  uploadFile(event: any){
    console.log(event);
    this.selectedFile = event.target.files[0];
    let resp = this.service.uploadFile(this.selectedFile);
    // resp.subscribe((data)=>this.message=data);
    resp.subscribe(data=>{
        console.log(data)
      })
  }

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './auth/components/login/login.component';
import { CreatorComponent } from './creator/components/creator/creator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // animal!: string;
  // name!: string;
  
  // constructor(public dialog: MatDialog) {}
  
  // openDialog(): void {
  //   let dialogRef = this.dialog.open(CreatorComponent, {
  //     width: '450px',
  //     // data: { name: this.name, animal: this.animal }
  //   });
  
  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   this.animal = result;
  //   // });
  // }
  title = 'UI-StarterUp-Web-Platform';
}

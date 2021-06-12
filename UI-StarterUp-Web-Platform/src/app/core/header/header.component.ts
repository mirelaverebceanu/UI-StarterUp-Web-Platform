import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/menu-item';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { CreatorComponent } from 'src/app/creator/components/creator/creator.component';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { RestapiService } from 'src/app/restapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  authenticated = false;
  @ViewChild(LoginComponent) child: any; 
  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'app_registration',
      routerLink: "/register",
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Sign In',
      icon: 'login',
      routerLink: '/login',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
  ];

  // constructor() { }
  
  constructor(private service: RestapiService, private router:Router, public dialog: MatDialog) {}
  
  openLoginDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '450px',
    });

    if(this.service.isUserLoggedIn()){
      this.authenticated = true;
    }
    // dialogRef.afterClosed().subscribe(result => {
    //   this.authenticated = true;
    // });
  }
  

  openRegisterDialog(): void {
    let dialogRef = this.dialog.open(RegisterComponent, {
      width: '650px',
    });
  
    // dialogRef.afterClosed().subscribe(result => {
    //   this.animal = result;
    // });
  }

  openCreatorDialog(): void {
    let dialogRef = this.dialog.open(CreatorComponent, {
      width: '450px',
    });
  }

  logout(){
    this.authenticated= false;
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/menu-item';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

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
  
  constructor(public dialog: MatDialog) {}
  
  openLoginDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '450px',
    });
  
    // dialogRef.afterClosed().subscribe(result => {
    //   this.animal = result;
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

  ngOnInit(): void {
  }

}

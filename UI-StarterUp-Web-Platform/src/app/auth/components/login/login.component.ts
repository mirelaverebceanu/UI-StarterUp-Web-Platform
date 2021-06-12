import { NgIf } from '@angular/common';
import { ViewChild } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthBody } from 'src/app/authbody';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { RestapiService } from 'src/app/restapi.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { RegisterComponent } from '../register/register.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Sign in';
  // userName!: string;
  // password!: string;
  islogged=false;
  @ViewChild(HeaderComponent) child: any;  
  public auth: AuthBody = new AuthBody("","");


  ngOnInit(): void {
  
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private router:Router, private service: RestapiService, public dialog: MatDialog) {}
  openRegisterDialog(): void {
    this.dialog.closeAll();
    let dialogRef = this.dialog.open(RegisterComponent, {
      width: '650px',
    });
  }

  openResetpassDialog(): void {
    this.dialog.closeAll();
    let dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '450px',
    });
  }

  public login(){
    // let resp= this.service.login(this.userName, this.password);
    // resp.subscribe(data=>{
    //   console.log(data)
    // })
    let resp = this.service.login(this.auth);
    // resp.subscribe((data)=>this.message=data);
    resp.subscribe(data=>{
        console.log(data)
      })
    this.router.navigate(['/home']);
    if(this.auth.email){
      this.islogged= true;
      this.dialog.closeAll();
    }
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { RestapiService } from 'src/app/restapi.service';
import { User } from 'src/app/user';
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
  user: User = new User("","");


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

  constructor(private service: RestapiService, public dialog: MatDialog) {}
  openRegisterDialog(): void {
    let dialogRef = this.dialog.open(RegisterComponent, {
      width: '650px',
    });
  }

  openResetpassDialog(): void {
    let dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '450px',
    });
  }

  login(){
    // let resp= this.service.login(this.userName, this.password);
    // resp.subscribe(data=>{
    //   console.log(data)
    // })
    let resp = this.service.login(this.user);
    // resp.subscribe((data)=>this.message=data);
    resp.subscribe(data=>{
        console.log(data)
      })
  }

}

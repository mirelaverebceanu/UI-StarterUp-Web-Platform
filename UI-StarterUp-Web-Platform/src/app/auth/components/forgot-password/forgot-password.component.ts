import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { RestapiService } from 'src/app/restapi.service';
import { User } from 'src/app/user';
import { LoginComponent } from '../login/login.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Roles: any = ['Creator', 'Investor'];
  Genders: any = ['Man', 'Woman', 'Other'];
  Countries: any = ['Moldova', 'Romania', 'Denmark'];

  registrationForm!: FormGroup;

  user: User = new User();

    // constructor() { }

    ngOnInit() {
      // this.registrationForm = new FormGroup({
      //   fullnameFormControl : new FormControl('', [
      //     Validators.required,
      //     Validators.minLength(6),
      //     Validators.maxLength(30),
      //   ]),
      //   emailFormControl : new FormControl('', [
      //     Validators.required,
      //     Validators.email,
      //   ]),
    
      //   userFormControl : new FormControl('', [
      //     Validators.required,
      //     Validators.email,
      //   ]),
    
      //   passwordFormControl : new FormControl('', [
      //     Validators.required,
      //     Validators.minLength(8),
      //   ]),
    
      //   roleFormControl : new FormControl('', [
      //     Validators.required
      //   ])
      // })
    }

    fullnameFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
    ]);

    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    userFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);

    roleFormControl = new FormControl('', [
      Validators.required
    ])

    matcher = new MyErrorStateMatcher();
  
    constructor(private service: RestapiService, public dialog: MatDialog) {}
  
    openLoginDialog(): void {
      this.dialog.closeAll();
      let dialogRef = this.dialog.open(LoginComponent, {
        width: '450px',
      });
      // dialogRef.afterClosed().subscribe(result => {
      //   this.animal = result;
      // });
    }
    // onSubmit(){
    //   alert(JSON.stringify(this.registrationForm.value));
    // }

    public register(){
      let resp = this.service.register(this.user);
      resp.subscribe(data=>{
        console.log(data)
      })
      this.dialog.closeAll();
    }



}
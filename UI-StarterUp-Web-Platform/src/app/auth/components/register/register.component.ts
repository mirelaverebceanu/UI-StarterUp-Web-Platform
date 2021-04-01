import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

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

  // form = new FormGroup({
  //   firstName: new FormControl('', Validators.required),
  //   lastName: new FormControl('', Validators.required),
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.email
  //   ]),
    
  //  });

    // constructor() { }
    fullnameFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
    ]);

    emailFormControl = new FormControl('', [
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
  
    // get firstname(){
    //   return this.form.get('firstName')
    // }
    ngOnInit() {
    }
  
    // onSubmit(){
    //   alert(JSON.stringify(this.form.value));
    // }

}
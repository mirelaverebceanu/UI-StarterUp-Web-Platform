import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];

  constructor() { }

  ngOnInit(): void {
  }

}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorComponent } from './components/creator/creator.component';


@NgModule({
  declarations: [CreatorComponent],
  entryComponents: [CreatorComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    CreatorRoutingModule
  ],
  exports: [
    CreatorComponent
  ]
})
export class CreatorModule { }

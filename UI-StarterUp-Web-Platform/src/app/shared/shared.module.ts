import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule} from '@angular/platform-browser';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [FilterPipe],
    imports: [
      CommonModule,
      BrowserModule
    ],
    exports: [
      FilterPipe
    ]
  })
  export class SharedModule { }
  
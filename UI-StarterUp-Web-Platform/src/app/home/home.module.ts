import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule} from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { MatCarouselModule } from '@ngbmodule/material-carousel'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    MatCarouselModule.forRoot(),
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

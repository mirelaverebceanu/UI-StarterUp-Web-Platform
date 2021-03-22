import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../auth/components/register/register.component';
import { LoginComponent } from '../auth/components/login/login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    RouterModule
  ]
})
export class CoreModule { }

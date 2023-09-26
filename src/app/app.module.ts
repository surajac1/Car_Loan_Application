import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Entry/home/home.component';
import { AboutUsComponent } from './Entry/about-us/about-us.component';
import { ContactComponent } from './Entry/contact/contact.component';
import { LoginComponent } from './Entry/login/login.component';
import { EMICalculatorComponent } from './Entry/emicalculator/emicalculator.component';
import { HomeHeaderComponent } from './Templete/home-header/home-header.component';
import { HomeFooterComponent } from './Templete/home-footer/home-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    LoginComponent,
    EMICalculatorComponent,
    HomeHeaderComponent,
    HomeFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

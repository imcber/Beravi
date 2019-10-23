import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { IntroViewComponent } from './intro-view/intro-view.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodyViewComponent } from './body-view/body-view.component';
import { FooterViewComponent } from './footer-view/footer-view.component';
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    IntroViewComponent,
    BodyViewComponent,
    FooterViewComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    FontAwesomeModule,
    WavesModule,
    ButtonsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

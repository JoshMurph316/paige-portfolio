import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EmailComponent } from './contact/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    GalleryComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
    
}
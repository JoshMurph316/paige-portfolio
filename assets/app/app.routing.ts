import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LandingComponent } from './landing/landing.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo:'/landing', pathMatch: 'full'},
    { path: 'landing', component: LandingComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);
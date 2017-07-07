import { Routes } from '@angular/router';

import { ManagerComponent } from "./manager/manager.component";
import { DisplayComponent } from "./display/display.component";

export const GALLERY_ROUTES: Routes = [
    { path: '', redirectTo: 'display', pathMatch: 'full'},
    { path: 'manager', component: ManagerComponent},
    { path: 'display', component: DisplayComponent}
];
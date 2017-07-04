import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
    view: string = 'landing';

    onLanding() {
        this.view = "landing";
        console.log(this.view);
    }
    onGallery() {
        this.view = "gallery";
        console.log(this.view);
    }
    onAbout() {
        this.view = "about";
        console.log(this.view);
    }
    onContact() {
        this.view = "contact";
        console.log(this.view);
    }
}
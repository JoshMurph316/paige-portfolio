import { Component } from '@angular/core'

@Component({
    selector: 'app-gallery',
    templateUrl: 'gallery.component.html',
    styleUrls: ['gallery.component.css']
})

export class GalleryComponent {
    images:string[] = [
        "/images/paige-open.jpg",
        "/images/hand-up.jpg",
        "/images/about-light.jpg",
        "/images/red-side.jpg",
        "/images/upper-profile.jpg",
        "/images/before-after1.jpg",
        "/images/red-far.jpg",
        "/images/before-after2.jpg",
        "/images/camera.jpg",
        "/images/circle-light.jpg",
        "/images/close-work.jpg",
        "/images/sam-close.jpg",
        "/images/paige-close.jpg",
        "/images/paige-down.jpg",
        "/images/red-close.jpg",
        "/images/double2.jpg",
        "/images/selfie-outside.jpg",
        "/images/sam-far.jpg",
        "/images/double1.jpg",
        "/images/wet-eyes.jpg",
        "/images/side-head.jpg",
        "/images/selfie-inside.jpg",
    ];
}
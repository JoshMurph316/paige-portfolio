import { Component, OnInit, Input } from '@angular/core';

import { Image } from "./image.model";

@Component({
    selector: 'app-images',
    templateUrl: 'images.component.html'
})

export class ImagesComponent implements OnInit {
    @Input() images = {
        imgSrc: ['./images/red-far.jpg', 
                 './images/red-close.jpg',
                 './images/red-far.jpg'
                ]
    };

    constructor() {
        console.log(this.images.imgSrc)
    }

    ngOnInit() {
    }
}
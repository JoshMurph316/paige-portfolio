import { Component } from '@angular/core';

import { Image } from "./general-images/image.model";


@Component({
    selector: 'app-display',
    templateUrl: 'display.component.html',
    styleUrls: ['./display.component.css']
})

export class DisplayComponent {
    image: Image;


}
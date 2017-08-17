import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmailService } from './email.service';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  name: String;
  email: String;

    constructor(private EmailService: EmailService, private router: Router) {}    
    ngOnInit() {}

    onEmailSubmit() {

        const email = {
            name: this.name,
            email: this.email
        }
        this.EmailService.registerEmail(email).subscribe(data => {
            if(data.success){
                this.router.navigate(['/home'])
            } else {
                this.router.navigate(['/home'])
            }
        });
    }   
    

}
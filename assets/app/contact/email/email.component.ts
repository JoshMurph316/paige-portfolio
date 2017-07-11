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

    onEmailSubmit() {
        console.log(this.name);
        console.log(this.email);
        const email = {
            name: this.name,
            email: this.email
        }
        console.log(email);
        console.log(email.name);
        console.log(email.email);
        this.EmailService.registerEmail(email).subscribe(data => {
            if(data.success){
                console.log("email sent! to the back")
                this.router.navigate(['/landing'])
            } else {
                console.log("we were unable to process")
                this.router.navigate(['/landing'])
            }
        })
    }   
    
    ngOnInit() {}

}
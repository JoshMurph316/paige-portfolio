import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
    customerForm: FormGroup;

    onSubmit() {
        console.log(this.customerForm);
        this.customerForm.reset();
    }   
    ngOnInit() {
        this.customerForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            email: new FormControl(null,[
                Validators.required,
                Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                ])
        });
    }
}
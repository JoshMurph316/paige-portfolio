import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-manager',
    templateUrl: 'manager.component.html',
    styleUrls: ['./manager.component.css']
})

export class ManagerComponent implements OnInit{
        userForm: FormGroup;

    onSubmit() {
        console.log(this.userForm);
        this.userForm.reset();
    }   

    ngOnInit() {
        this.userForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
        });
    }
}
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {
    email: any;

    constructor(private http: Http) { }

    registerEmail(email) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/contact/email', email, {headers: headers})
            .map(res => res.json());
    }
}
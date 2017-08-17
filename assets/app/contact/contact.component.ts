import { Component, OnInit } from '@angular/core';

import { EmailService } from "./email/email.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmailService]
})
export class ContactComponent implements OnInit {
  moreInfo = 'no';

  constructor() { }

  ngOnInit() {
  }
  onMoreInfo() {
    this.moreInfo = this.moreInfo === 'yes' ? 'no' : 'yes';
  }

}

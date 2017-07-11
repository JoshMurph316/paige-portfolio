export class Email {
    name: string;
    email: string;
    emailId: string;
    nameId: string;

    constructor(name: string, email: string, emailId: string, nameId: string) {
        this.name = name;
        this.email = email;
        this.emailId = emailId;
        this.nameId = nameId;
    }
}
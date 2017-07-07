export class Email {
    customer: string;
    address: string;
    emailId: string;
    customerId: string;

    constructor(customer: string, address: string, emailId: string, customerId: string) {
        this.customer = customer;
        this.address = address;
        this.emailId = emailId;
        this.customerId = customerId;
    }
}
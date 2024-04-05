import { LightningElement, api } from 'lwc';
import openRecord from '@salesforce/apex/TestingController.openRecord';

export default class TestingComponent extends LightningElement {
    @api recordId;
    @api objectApiName

    connectedCallback() {
        console.log('this.recordId'+this.recordId)
        // Call the Apex method to populate the Testing object
        openRecord({ recordId: this.recordId })
            .then(result => {
                // Handle success if needed
            })
            .catch(error => {
                // Handle error if needed
            });
    }
}
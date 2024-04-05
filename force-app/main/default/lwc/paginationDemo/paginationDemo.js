import { LightningElement, wire } from 'lwc';
import GETCONTACTLIST from '@salesforce/apex/DataController.getContactList';
// import GETACCOUNTLIST from '@salesforce/apex/DataController.getAccountList';

export default class PaginationDemo extends LightningElement {
    totalContacts
    visibleContacts

    // totalAccounts
    // visibleAccounts
    @wire(GETCONTACTLIST)
    wiredContact({error, data}){
        if(data){ 
            this.totalContacts = data
            console.log(this.totalContacts)
        }
        if(error){
            console.error(error)
        }
    }

    // @wire(GETACCOUNTLIST)
    // wiredaccount({error, data}){
    //     if(data){ 
    //         this.totalAccounts = data
    //         console.log(this.totalAccounts)
    //     }
    //     if(error){
    //         console.error(error)
    //     }
    // }

    updateContactHandler(event){
        this.visibleContacts=[...event.detail.records]
        console.log('this.visibleContacts--->'+this.visibleContacts)
        console.log(event.detail.records)
    }
    // updateAccountHandler(event){
    //     this.visibleAccounts=[...event.detail.records]
    //     console.log(event.detail.records)
    // }
}

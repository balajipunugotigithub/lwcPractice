import { LightningElement, } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY from '@salesforce/schema/Account.Industry';

export default class LighthningRecordFormEditLWC extends LightningElement {
    // @api recordId
    // @api objectApiName
    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY]
    
    handleClick(event){
        console.log('Account detail : ',event.detail.fields);
        console.log('Account name : ',event.detail.fields.Name);
    }

}
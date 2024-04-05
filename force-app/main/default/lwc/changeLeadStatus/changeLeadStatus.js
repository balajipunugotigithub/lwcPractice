import { LightningElement, api, wire } from 'lwc';
import getStatus from '@salesforce/apex/leadController.getStatus';
import { getRecord } from 'lightning/uiRecordApi';
export default class ChangeLeadStatus extends LightningElement {

    @api recordId;

    status = '';
    @wire(getRecord, { recordId: '$recordId', fields: ['Lead.Name'] })

        
    connectedCallback(){
        console.log('Record Id:', this.recordId);
        
      
        getStatus({recordId:this.recordId}).then(result=>{

        this.status=result;
        console.log('status==>'+ this.status);
        })

    }


}
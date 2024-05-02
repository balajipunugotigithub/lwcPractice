import { LightningElement, api, wire } from 'lwc';
import GetOppConTask from '@salesforce/apex/quickActionInOppRec.getOppConTask';
import {CurrentPageReference} from 'lightning/navigation';

export default class QuickActionInOppRec extends LightningElement {
    @api recordId;
    @api objectApiName;
    oppConTaskData = []
    showData = false

    handleClick() {
        console.log('clicked');
        if(this.oppConTaskData.length > 0){
            console.log('data exist');
            this.showData = true
        }
        
    }

    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
        if (currentPageReference) {
            this.recordId = currentPageReference.state.recordId;
            console.log('this.recordId:::> '+this.recordId);
        }
    }

    @wire(GetOppConTask, {oppRecId: '$recordId'})
    opportunity({ data, error }) {
        if (data) {
            console.log('data from apex ===>'+JSON.stringify(data));
            console.log('data from apex ===>'+data[0].subject);
            console.log('data from apex ===>'+data[0].taskId);
            this.oppConTaskData = data;
        } else if (error) {
            console.error(error);
        }   
    }

    

    

}
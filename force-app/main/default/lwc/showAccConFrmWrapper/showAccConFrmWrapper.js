import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/displayAccConWrapper.getAccount';

const columns = [
    {  label: 'AccId', fieldName: 'accUrl', type: 'url', 
       typeAttributes: { label: { fieldName: 'accountID' }, target: '_blank' } },
    { label :'Account Name', fieldName :'accName' },
    { label :'Account Phone', fieldName :'accPhone' },
    { label :'Contact Id', fieldName :'conID' },
    { label :'Contact Name', fieldName :'conName' },
    { label :'Contact Email', fieldName :'conEmail' }
]

export default class ShowAccConFrmWrapper extends LightningElement {
    dataReceived = [];
    columns = columns;
    @wire(getAccount)
    wiredFunction({data, error}){
        if(data){
          
            this.dataReceived = data
            
        }

        if(error){
            console.log('got error===>'+error)
        }
    }

}
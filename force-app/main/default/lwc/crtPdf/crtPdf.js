import { LightningElement} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import generatePdf from '@salesforce/apex/CreatePdfController.generatePdf'

export default class CrtPdf extends LightningElement {
    recordId = '0015i00000KmOwnAAF';

    generatePdfCall() {
        generatePdf({idAccount:this.recordId}).then(result=>{
            console.log('result-->'+result)
        }).catch(error=>{
            console.error(error)
        })
        
    }


}
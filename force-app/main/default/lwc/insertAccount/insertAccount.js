import { LightningElement, track, api} from 'lwc';
import createAccount from '@salesforce/apex/insertAccount.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';


export default class insertAccount extends NavigationMixin(LightningElement) {

accountName;
annualRevenue;
industry;


@track optionsList = 
[
    { label: 'Agriculture', value: 'agriculture' },
    { label: 'Banking', value: 'banking' },
    { label: 'Apparel', value: 'apparel' },
    { label: 'Infrastructure', value: 'infrastructure' },
    { label: 'Manufacturing', value: 'manufacturing' },
    { label: 'Biotechnology', value: 'biotechnology' },
]



handleAccountName(event){
this.accountName = event.target.value;
// console.log(this.accountName)
}

handleAnnualRevenue(event){
this.annualRevenue = event.target.value;
// console.log(this.annualRevenue)
}

handleIndustry(event){
// console.log(event);
this.industry = event.target.value;
}

handleInsert(){
// console.log(this.acc);
// console.log('this is a account name ==> ' + this.accountName)
createAccount({AccountName: this.accountName, AnnualRevenue: this.annualRevenue, Industry: this.industry})
.then((result)=>{
this.showSuccessNotification()
this.clearForm()
console.log('result :: '+ result)
console.log('account inserted successfully')
this.navigateToRecordPage(result)
}).catch((error)=>{
    this.error = error;
    console.log('this is error body message ' + error);
    this.errorNotification(error)
})
}

showSuccessNotification(){
const evnt = new ShowToastEvent({
    title : "Success",
    message : "Account record inserted successfully",
    variant : "Success",
    mode : "sticky"
})
this.dispatchEvent(evnt);
}

clearForm(){
const inputFields = this.template.querySelectorAll('.balaji');
if(inputFields){
    inputFields.forEach(field => {
        field.value = null;
    });
}

}

navigateToRecordPage(result){
console.log('entered in navigation method');
console.log('result.Id :: '+ result);
this[NavigationMixin.Navigate]({
    type: 'standard__recordPage',
    attributes:{
        recordId : result,
        objectApiName : 'Account',
        actionName : 'view' 
    }
});
}

errorNotification(error){
// console.log('error inside errorNotification method ---> '+error)
// console.log('error.body.message inside errorNotification method ---> '+error.body.message)
const errorEvent = new ShowToastEvent({
    title : "Error",
    message : error.body.message,
    variant : "Error",
    mode : "sticky"
})
this.dispatchEvent(errorEvent);
}

handleUploadFinished(event) {
// Get the list of uploaded files
const uploadedFiles = event.detail.files;
alert('No. of files uploaded : ' + uploadedFiles.length);
}


}
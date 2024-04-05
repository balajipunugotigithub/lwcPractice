import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/insertAccount.createAccount';

export default class CreateAccount extends LightningElement {
    // @track accountName = '';
    // @track annualRevenue;
    // @track industry;
    // @track accounts;
    @track acc = {
        Name : '',
        AnnualRevenue : undefined,
        Industry : ''
    };

    @track optionsList = 
        [
            { label: 'Agriculture', value: 'agriculture' },
            { label: 'Banking', value: 'banking' },
            { label: 'Apparel', value: 'apparel' },
            { label: 'Infrastructure', value: 'infrastructure' },
            { label: 'Manufacturing', value: 'manufacturing' },
            { label: 'Biotechnology', value: 'biotechnology' },
        ]

    
    
    // handleAccountName(event){
    //     this.accountName = event.target.value;
    //     console.log(this.accountName)
    // }

    // handleAnnualRevenue(event){
    //     this.annualRevenue = event.target.value;
    //     console.log(this.annualRevenue)
    // }

    // handleIndustry(event){
    //     console.log(event);
    //     this.industry = event.target.value;
    // }


    handleInputChange(event) {
        // console.log(event)
        // console.log('after console event');
        const field = event.target.name;
        console.log('field ::' + field);
        const value = event.target.value;
        console.log('value ::' + value);
        this.acc[field] = value;
        console.log(this.acc.Name);
        console.log(this.acc.AnnualRevenue);
        console.log(this.acc.Industry);
        console.log('after console this.acc')
    }

    handleInsert(){
        console.log(this.acc);
        createAccount({accounts : this.acc})
        .then((result)=>{
            this.accounts = result;
        }).catch((error)=>{
            this.error = error;
        })
    }

    


}
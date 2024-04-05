import { LightningElement } from 'lwc';
import GETACCOUNTS from '@salesforce/apex/AccountController.getAccountList';

const columnList = [
    {label : 'Id', fieldName : 'Id', type : 'text'},
    {label : 'Account Name', fieldName : 'Name', type : 'text'},
    {label : 'Account Industry', fieldName : 'Industry', type : 'text'}
]

export default class LazyLoading extends LightningElement {
    accounts = []
    columns = columnList
    error
    recordLimit = 10
    recordFrom = 0

    connectedCallback(){
        this.loadData();
    }

    loadData(){
        return GETACCOUNTS({recordLimit:this.recordLimit , recordFrom:this.recordFrom})
        .then(result=>{
            let updatedRecords = [...this.accounts,...result]
            this.accounts = updatedRecords
            this.error = undefined
            console.log('inside loadData then')
          //  console.log('accounts==>'+this.accounts);
        })
        .catch(error=>{
            this.error = error
            this.accounts = undefined
            console.log('inside loadData catch')
        });
    }

    loadMoreData(event){
        console.log('loadMoreData called')
        const currentRecord = this.accounts
        const { target } = event
      //  console.log('target-->'+target)
        target.isLoading = true

        this.recordFrom = this.recordFrom + this.recordLimit
        this.loadData()
            .then(()=>{
            target.isLoading = false
        });
    }



}
import { LightningElement, track,wire} from 'lwc';
import getAccounts from '@salesforce/apex/customDataTableController.getAccounts';

export default class DataTableAccount extends LightningElement {
    @track accounts=[];
   
    newRecord=false;


    

    @wire(getAccounts)
    wiredAccounts({data,error}){
        if(data){
            console.log(data);
            this.accounts = data;
            this.accounts = this.accounts.map((record, index) => {
                console.log(record.Name);
                console.log('calling');
                return { record, sno: index + 1 };
            }); 
        }      
    }

    addRow(){
       console.log(JSON.stringify(this.accounts[0]));
        let randomId = Math.random() * 16;
        let myNewElement = {
                    Id: randomId,
                    Name: "Pretty",
                    Phone : "",
                    Industry: ""
                };
        console.log(JSON.stringify(myNewElement));
        this.accounts = [...this.accounts, myNewElement]

        console.log(JSON.stringify(this.accounts));
        this.newRecord=true;
        console.log(this.newRecord);
    }
}
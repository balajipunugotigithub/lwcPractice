import { LightningElement, wire } from 'lwc';
import GETCONTACTLIST from '@salesforce/apex/DataController.getContactList'

const columns = [
    {label : 'ContactId', fieldName : 'Id'},
    {label : 'Name', fieldName : 'Name'},
    {label : 'Email', fieldName : 'Email'},
    {label : 'Phone', fieldName : 'Phone'}
]

export default class PaginationLwcFactory extends LightningElement {
    dataFromApex = []
    displayColumns = columns

    recordsToDisplay = []; //Records to be displayed on the page
    currentPage = 1;
    pageSize=5; //No.of records to be displayed per page
    totalPages = 1; //Total no.of pages
    handledisable=false;
    handledisableprev=false;
    
    
    
    @wire(GETCONTACTLIST)
    wiredData({error,data}){
        if(data){ 
            this.dataFromApex = data
            console.log(this.dataFromApex)
            this.totalRecords =  this.dataFromApex.length 
            this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
            this.preparePaginationList();
        }
        if(error){
            console.error(error)
        }
    }

    handleClick(event) {
        let label = event.target.label;
        if (label === "First") {
            this.firstHandle();
        } else if (label === "Previous") {
            this.previousHandle();
        } else if (label === "Next") {
            this.nextHandle();
        } else if (label === "Last") {
            this.lastHandle();
        }
    }

    handleNext() {
        console.log('handle next')
        this.currentPage += 1;
        this.preparePaginationList();
    }

    handlePrevious() {
        this.currentPage -= 1;
        this.preparePaginationList();
    }

    handleFirst() {
        this.currentPage = 1;
        this.preparePaginationList();
    }

    handleLast() {
        this.currentPage = this.totalPages;
        this.preparePaginationList();
    }

    preparePaginationList() {
       
        let begin = (this.currentPage - 1) * parseInt(this.pageSize);
        let end = parseInt(begin) + parseInt(this.pageSize);

       // if(this.currentPage <= this.totalPages){

            this.recordsToDisplay = this.dataFromApex.slice(begin, end); 
            
            if(this.currentPage == this.totalPages){
                this.handledisable = true
            }else{
                this.handledisable = false
            }
        
            if(this.currentPage == 1){
                this.handledisableprev = true
            }else{
                this.handledisableprev = false

            }
            
      //  }
      
       
    }
}
import { LightningElement, api } from 'lwc';

export default class Pagination extends LightningElement {

    currentPage =1
    totalRecords
    @api recordSize = 5
    totalPage = 0
    visibleRecords

    get records(){
        return this.visibleRecords
    }
    @api 
    set records(data){
        if(data){ 
            this.totalRecords = data
            console.log('totalRecords--->'+this.totalRecords)
            console.log('totalRecords--->'+this.recordSize)
            this.recordSize = Number(this.recordSize)
            this.totalPage = Math.ceil(data.length/this.recordSize)
            console.log('this.totalPage--->'+this.totalPage)
            this.updateRecords()
        }
    }

    get disablePrevious(){ 
        return this.currentPage<=1
    }
    get disableNext(){ 
        return this.currentPage>=this.totalPage
    }
    previousHandler(){ 
        if(this.currentPage>1){
            this.currentPage = this.currentPage-1
            this.updateRecords()
        }
    }
    nextHandler(){
        if(this.currentPage < this.totalPage){
            this.currentPage = this.currentPage+1
            this.updateRecords()
        }
    }
    updateRecords(){ 
        const start = (this.currentPage-1)*this.recordSize
        console.log('start--->'+start)
        const end = this.recordSize*this.currentPage
        console.log('end--->'+end)
        this.visibleRecords = this.totalRecords.slice(start, end)
        console.log('this.visibleRecords--->'+this.visibleRecords)
        this.dispatchEvent(new CustomEvent('update',{ 
            detail:{ 
                records:this.visibleRecords
            }
        }))
    }
    
}
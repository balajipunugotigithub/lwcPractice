import { LightningElement, track } from 'lwc';

export default class DynamicDatable extends LightningElement {

    @track itemsToDisplay=[];
    
    connectedCallback(){
      let obj={
        id:0,
        name:null,
        phone:null,
        site:null
      }
      this.itemsToDisplay.push(obj);
    };

    @track newItemName = '';
    valueClick = 0;
    index = 0;
    rotateLoop(event) {
      console.log('inside rotate loop')
     // let value = this.itemsToDisplay[0].id === 0 ? 1 : this.itemsToDisplay[0].id + 1;
     this.index = event.target.dataset.index;
     console.log('index==>'+this.index)
      this.valueClick = parseInt(this.index)+1;
      console.log('value==>'+this.valueClick);
        let obj={
            id:this.valueClick,
            name:null,
            phone:null,
            site:null
          }
          this.itemsToDisplay.push(obj);

          console.log('this.itemsToDisplay==>'+JSON.stringify(this.itemsToDisplay));
        
    }
     

    removeItem(event) {
        // Get the index from the data attribute of the button
        let indexIdRemove = event.target.dataset.index;
       
        let updatedList = [];

        for(let i=0; i<this.itemsToDisplay.length; i++){
          if(indexIdRemove != this.itemsToDisplay[i].id){
            updatedList.push(this.itemsToDisplay[i]);
          }
         }

         this.itemsToDisplay = [...updatedList];
         console.log('this.itemsToDisplay==>'+JSON.stringify(this.itemsToDisplay));
      
     }

    // handleName(event){
        
    //     let indexId = event.target.dataset.index;
    //     console.log('itemdId==>'+indexId);
    //     this.itemsToDisplay[indexId].name = event.target.value;
    //     console.log('this.itemsToDisplay_handleName==>'+JSON.stringify(this.itemsToDisplay));
    //     console.log('this.itemsToDisplay[indexId].name==>'+this.itemsToDisplay[indexId].name);

    // }

}
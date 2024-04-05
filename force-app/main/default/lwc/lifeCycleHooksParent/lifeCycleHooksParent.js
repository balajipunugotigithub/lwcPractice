import { LightningElement, api } from 'lwc';

export default class LifeCycleHooksParent extends LightningElement {
    
    message 

    constructor(){
        super()
        this.template.addEventListener('show',this.handleShow.bind(this))
    }

    handleShow(event){
        this.message = event.detail.name
    }

}

    
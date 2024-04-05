import { LightningElement, api} from 'lwc';

export default class LifeCycleHooksChild extends LightningElement {
    
    handleClick(){
        const cusEvent = new CustomEvent('show',{
            detail : {
                name : 'balaji'
            },bubbles : true
        })

        this.dispatchEvent(cusEvent)
    }

    
    
    
}
import { LightningElement, wire } from 'lwc';
import GetOppConTask from '@salesforce/apex/quickActionInOppRec.getOppConTask';

export default class TestingComponentForResponsive extends LightningElement {

    oppConTaskData = []
    showData = false
    handleClick() {
        console.log('clicked');
        if(this.oppConTaskData.length > 0){
            console.log('data exist');
            this.showData = true
        }
        
    }

    @wire(GetOppConTask, {oppRecId: '0065g00000Xk6uUAAR'})
    opportunity({ data, error }) {
        if (data) {
            console.log('data from apex ===>'+JSON.stringify(data));
            console.log('data from apex ===>'+data[0].subject);
            console.log('data from apex ===>'+data[0].taskId);
            this.oppConTaskData = data;
        } else if (error) {
            console.error(error);
        }   
    }

}
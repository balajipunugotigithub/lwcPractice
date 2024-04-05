import { LightningElement, track } from 'lwc';
export default class LookupAccount extends LightningElement {
    @track searchKey;
    handleChange(event) {
        /* eslint-disable no-console */ //console.log('Search Event Started '); 
        const searchKey = event.target.value; /* eslint-disable no-console */ 
        console.log('searchKey in lookupAccount--->'+searchKey);
        event.preventDefault();
        const checkEvent = event.target.value;
        console.log('checkEvent---->'+checkEvent); 
        const searchEvent = new CustomEvent( 'change', { 
            detail : searchKey 
            
        } ); this.dispatchEvent(searchEvent); 
    } 
}
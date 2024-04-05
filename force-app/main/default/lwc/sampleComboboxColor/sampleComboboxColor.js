
import { LightningElement, track } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import customCSS from '@salesforce/resourceUrl/sampleComboboxColor';

export default class SampleComboboxColor extends LightningElement {

  renderedCallback(){
    Promise.all([
      loadStyle(this, customCSS)
    ])
  }

  @track value = 'inProgress';

  get options() {
    return [
      { label: 'New', value: 'new' },
      { label: 'In Progress', value: 'inProgress' },
      { label: 'Completed', value: 'completed' },
    ];
  }

  handleChange(event) {
    this.value = event.detail.value;
  }

  
}

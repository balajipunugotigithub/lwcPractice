import { LightningElement, track, wire } from 'lwc';
import GETACCNAME from '@salesforce/apex/accountPicklist.getAccName';

export default class AccountPicklist extends LightningElement {

//     value = '';
    
// accdata=[];
// optionlist=[];
// @wire(GETACCNAME)
// wiredAccounts({ error, data }) {
//     if (data) {
//         this.optionlist = data.map(element => ({
//             label: element,
//             value: element
//         }));
//     } else if (error) {
//         console.error('Error fetching data:', error);
//     }
// }

value = 'inProgress';

get options() {
    return [
      { label: 'New', value: 'new', colorClass: 'new-color' }, // Add color class
      { label: 'In Progress', value: 'inProgress', colorClass: 'in-progress-color' },
      { label: 'Finished', value: 'finished', colorClass: 'finished-color' },
    ];
  }

  customColorClass(selectedValue) {
    return selectedValue === 'inProgress' ? 'custom-combobox' : ''; // Adjust condition as needed
  }

  handleChange(event) {
    this.value = event.detail.value;
  }


}
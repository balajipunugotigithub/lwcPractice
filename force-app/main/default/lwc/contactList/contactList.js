// contactList.js
import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/contactController.getContacts'; 

export default class ContactList extends LightningElement {
    myInputText
    
    contacts;
    contactClass = 'normal'; // Default class for contact elements

    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            console.log('contacts---> '+JSON.stringify(this.contacts))
        } else if (error) {
            console.error('Error fetching contacts: ', error);
        }
    }

    inputHandle(event){
        let captureInput = event.target.value;

        setTimeout(() => {
            this.myInputText = captureInput
            this.applyCustomStyling()
        }, 1000);
        
    }

    handleClick(event) {
        // Handle click event
    }

    // renderedCallback() {
    //     console.log('renderedCallback called');
    //     this.applyCustomStyling();
    // }

    applyCustomStyling() {
        // Apply custom styling to contact elements based on certain conditions
        const contactElements = this.template.querySelectorAll('li');
        contactElements.forEach(contactElement => {
            // Example condition: Apply 'highlight' class to contacts whose email contains 'example.com'
            if (contactElement.textContent.toLowerCase() == this.myInputText.toLowerCase()) {
                contactElement.classList.add('highlight');
            }else{
                contactElement.classList.remove('highlight');
                contactElement.classList.add('normal');
            }
        });
    }
}

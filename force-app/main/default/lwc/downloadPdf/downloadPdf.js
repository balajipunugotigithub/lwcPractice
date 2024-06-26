import { LightningElement, track, wire } from 'lwc';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import JSPDF from '@salesforce/resourceUrl/jsPDF';
import { loadScript } from 'lightning/platformResourceLoader';
const FIELDS = [
    'Contact.Id','Contact.Name',  'Contact.Account.Name',  'Contact.Phone',
      'Contact.MailingStreet',  'Contact.OtherStreet', ' Contact.Email'
  ];
export default class downloadPdf extends LightningElement {

  @track name;
//   @track accountName;
  @track email;
//   @track billTo;
//   @track shipTo;
//   @track phone;
 //@api recordId;

  @wire(getRecord, {
      recordId: "0035i00009W5xcAAAR",
      fields:FIELDS
    })

    contactData({data,error}){
      if(data){
        console.log('inside contact data')
        console.log('data'+JSON.stringify(data))
        this.name=getFieldValue(data,'Contact.Name');
        // this.accountName=getFieldValue(data,'Contact.Account.Name')
        this.email=getFieldValue(data,'Contact.Phone')
        // this.billTo=getFieldValue(data,'Contact.MailingStreet')
        // this.shipTo=getFieldValue(data,'Contact.OtherStreet')
        // this.phone=getFieldValue(data,'Contact.Email')
      }
      else if(error){
        console.log(error)
      }
    }

    jsPdfInitialized=false;
    renderedCallback(){
        console.log('inside rendered callback')
        //console.log(this.contact.data);
        promise.all([
            loadScript(this, JSPDF )
        ]).then(() => { 
            console.log('loadscript success');
            //succes
        }).catch(error=>{
            console.error(error)
        });

        if (this.jsPdfInitialized) {
            return; 
        }
        this.jsPdfInitialized = true;
    }

    generatePdf(){
        console.log('button click 2')
        const { jsPDF } = window.jspdf;
         const doc = new jsPDF();

       
        doc.setFontSize(20);
        doc.setFont('helvetica')
        doc.text("INVOICE", 90, 20,)        
        doc.setFontSize(10)
        doc.setFont('arial black')
        doc.text("Account Name:", 20, 40)
        doc.text("Contact Name:", 20, 50)
        doc.text("Phone Number:", 20, 60)
        doc.text("Email:", 20, 70)
        doc.text("Billing Address:", 20, 80)
        doc.text("Shipping Address:", 150, 80)  
        doc.setFontSize(10)
        doc.setFont('times')
        doc.text(this.accountName, 45, 40)
        doc.text(this.phone, 45, 60)
        doc.text(this.name, 45, 50)
        doc.text(this.billTo, 20, 85)
        doc.text(this.shipTo, 150, 85)
        doc.text(this.email, 45, 70)
        doc.save("CustomerInvoice.pdf")
    }

    generateData(){
        console.log('button click 1')
        this.generatePdf();
}

    
}
import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import uploadFile from '@salesforce/apex/FileUploaderClass.uploadFile';

export default class FileUploaderCompLwc extends LightningElement {
    @api recordId;
    fileData
    openfileUpload(event) {
        const file = event.target.files[0]
        //console.log(file)
        var reader = new FileReader()
        //console.log(reader)
        reader.onload = () => {
           
            var base64 = reader.result.split(',')[1]
            //console.log(base64)
            this.fileData = {
                'filename': file.name,
                'base64': base64,
                'recordId': this.recordId
            }
            console.log(this.fileData)
        }
        reader.readAsDataURL(file)
    }

    handleClick(){
        const {base64, filename, recordId } = this.fileData
        uploadFile({base64, filename, recordId}).then(result=>{
            this.fileData = null;
            let title = `${filename} uploader successfully`;
            this.toast(title)

        })

    }

    toast(title){
        const toastEvent = new ShowToastEvent(
            {
                title,
                variant:"success"
            }
        );
        this.dispatchEvent(toastEvent);
    }
}
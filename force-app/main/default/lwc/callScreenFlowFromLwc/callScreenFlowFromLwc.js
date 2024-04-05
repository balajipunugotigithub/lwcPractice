import { LightningElement } from 'lwc';
import {ShowToastEvent} from "lightning/platformShowToastEvent";
export default class CallScreenFlowFromLwc extends LightningElement {
    flowApiName = "call_screenflow_from_lwc"; // api name of your flow
    nameFromLwc


	// Setting flow input variables
    connectedCallback() {
        this.nameFromLwc = "balaji punugoti";
    }
	
	flowInputVariables = [
		{
			name: "nameFromLwc",
			type: "String",
			value: this.nameFromLwc
		}
	];

        // do something when flow status changed
	// handleFlowStatusChange(event) {
	// 	console.log("flow status", event.detail.status);
	// 	if (event.detail.status === "FINISHED") {
	// 		this.dispatchEvent(
	// 			new ShowToastEvent({
	// 				title: "Success",
	// 				message: "Flow Finished Successfully",
	// 				variant: "success"
	// 			})
	// 		);
	// 	}
	// }
}
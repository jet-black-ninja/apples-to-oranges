import {Fruits} from "../data/types"
function showCheckoutMessage(fruitsInBag:Fruits):void {
    if(fruitsInBag.length > 0 ){
        alert("Congratulations~! You purchase is virtually successful . Too Bad this website is a scam");
    } else {
        alert("Cannot proceed with checkout. The bag is empty");
    }
}
export default showCheckoutMessage;
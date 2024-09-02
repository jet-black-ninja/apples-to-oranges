import { useStoreContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import "../../styles/Bag.scss"
import showCheckoutMessage from "../../utils/showCheckoutMessage";
import BagFruit from "./BagFruit/BagFruit";
import ButtonBlue from "../shared/ButtonBlue";
import ButtonBack from "../shared/ButtonBack";

export default function Bag() {
    const navigate = useNavigate();
    const {fruits} = useStoreContext();
    const fruitsInBag = fruits.filter((fruit) => fruit.inBag);
    const subtotalPrice : string = fruitsInBag
        .reduce((total:number, fruit) => total + fruit.price * fruit.quantity, 0)
        .toFixed(1);
    const vatPrice :string = (parseFloat(subtotalPrice) * 0.2 ).toFixed(1);
    const totalPrice : string = (parseFloat(subtotalPrice) + parseFloat(vatPrice)).toFixed(1);

    const handleGoBack = () => {
        navigate(-1);
    }
    const handleCheckOutClick = () => {
        showCheckoutMessage(fruitsInBag);
    }

    return (
        <div className ="bag">
            <ButtonBack className="buttonBack" onClick={handleGoBack}/>
            <h2>Shopping Bag</h2>

            <div className ="main">
                <ul className="leftContainer">
                    {fruitsInBag.length>0 ?(
                        fruitsInBag.map((fruit) => <BagFruit key={fruit.id} fruit={fruit} />)
                    ) :(
                        <li className="emptyBag">Bag is Empty</li>
                    )}
                </ul>

                <div className="rightContainer">
                    <div className="checkout">
                        <h2>Order Summary</h2>
                        <h2 className="priceTotal">${totalPrice}</h2>
                        <div className="subtotal">
                            <div className="subtotalName">Subtotal(3 items)</div>
                            <div className="subtotalPrice">${subtotalPrice}</div>
                        </div>
                        <div className="vat">
                            <div className="vatName">Vat (20%)</div>
                            <div className="vatPrice">${vatPrice}</div>
                        </div>
                        <hr/>
                        <div className="total">
                            <h2>Total</h2>
                            <h2>${totalPrice}</h2>
                        </div>
                        <ButtonBlue className="checkoutButton" onClick={() => handleCheckOutClick()} />
                    </div>
                </div>
            </div>
        </div>
    );
};



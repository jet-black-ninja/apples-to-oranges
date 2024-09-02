import {useStoreContext} from "../../Context.tsx";
import  "../../styles/editQuantity.scss";
import MinusIcon from "../../icons/MinusIcon.tsx";
import PlusIcon from "../../icons/PlusIcon.tsx";

export default function EditQuantity({fruit}){
    const {setFruits} =useStoreContext();
    const {quantity, id} = fruit;
    const handleMinusClick = () => {
        const newQuantity = Math.max(quantity -1, 1);
        setFruits((prevFruits) => 
            prevFruits.map((f)=> (f.id === id?{...fruit, quantity: newQuantity}:f))
        );
    };

    const handlePlusClick = () => {
        const newQuantity = quantity + 1;
        setFruits((prevFruits) => 
            prevFruits.map((f)=> (f.id === id?{...fruit, quantity: newQuantity}:f))
        );
    };
    return (
        <div className="editQuantity">
            <div className = "editButton" onClick={handleMinusClick}>
                <MinusIcon className="icon"/>
            </div>
            <div className="number">{quantity}</div>
            <div className ="editButton" onClick={handlePlusClick}>
                <PlusIcon className="icon"/>
            </div>
        </div>

    )

}
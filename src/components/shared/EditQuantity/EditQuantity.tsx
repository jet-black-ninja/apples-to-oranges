import {useStoreContext} from "../../../Context.tsx";
import  styles from "./editQuantity.module.scss";
import MinusIcon from "../../../icons/MinusIcon.tsx";
import PlusIcon from "../../../icons/PlusIcon.tsx";

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
        <div className={styles.editQuantity}>
      <div className={styles.editButton} onClick={handleMinusClick}>
        <MinusIcon className={styles.icon} />
      </div>
      <div className={styles.number}>{quantity}</div>
      <div className={styles.editButton} onClick={handlePlusClick}>
        <PlusIcon className={styles.icon} />
      </div>
    </div>

    )

}
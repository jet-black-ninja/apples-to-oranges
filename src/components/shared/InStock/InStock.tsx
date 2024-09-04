import styles from "./inStock.module.scss"
import BoxIcon from "../../../icons/BoxIcon";

export default function InStock() {
    return (
        <div className="inStock">
            <BoxIcon className={styles.box}/>
            In Stock
        </div>
    );
}
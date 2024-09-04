import { MouseEvent } from "react";
import styles from "./buttonBack.module.scss"
import BackIcon from "../../../icons/BackIcon"
interface Props{
    className?: string;
    onClick?: (event:MouseEvent<HTMLButtonElement>) => void;
}
function ButtonBack({className="" , onClick}:Props){
    return (
        <button className={`${styles.buttonBack} ${className}`} onClick={onClick}>
          <BackIcon className={styles.backIcon} />
        </button>
      );
}
export default ButtonBack;

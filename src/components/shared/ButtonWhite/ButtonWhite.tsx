import { MouseEvent } from "react";
import styles from './buttonWhite.module.scss';
import BagIcon from "../../../icons/BagIcon";

interface Props{
    className?:string;
    text?:string;
    onClick?:(event: MouseEvent<HTMLButtonElement>)=> void;
}

export default function ButtonWhite({className="", text="Add to Bag", onClick}:Props) {
    return (
        <button className={`${styles.buttonWhite} ${className}`} onClick={onClick}>
          <BagIcon className={styles.bag} />
          {text}
        </button>
      );
};
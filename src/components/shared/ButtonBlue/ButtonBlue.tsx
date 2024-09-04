import { MouseEvent } from "react";
import styles from "./buttonBlue.module.scss"

interface Props{
    className?:string;
    text?: string;
    onClick?:(event: MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBlue ({className="", text="Checkout", onClick}:Props){
    return (
        <button className={`${styles.buttonBlue} ${className}`} onClick={onClick}>
          {text}
        </button>
      );
};
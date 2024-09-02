import { MouseEvent } from "react";
import "../../styles/buttonBlue.scss"

interface Props{
    className?:string;
    text?: string;
    onClick?:(event: MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBlue ({className="", text="Checkout", onClick}:Props){
    return (
        <button className={`buttonBlue ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};
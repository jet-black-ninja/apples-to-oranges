import { MouseEvent } from "react";
import '../../styles/buttonWhite.scss';
import BagIcon from "../../icons/BagIcon";

interface Props{
    className?:string;
    text?:string;
    onClick?:(event: MouseEvent<HTMLButtonElement>)=> void;
}

export default function ButtonWhite({className="", text="Add to Bag", onClick}:Props) {
    return (
        <button className={`buttonWhite ${className}`} onClick={onClick}>
            <BagIcon className="bag"/>
            {text}
        </button>
    );
};
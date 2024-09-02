import { MouseEvent } from "react";
import "../../styles/buttonBack.scss"
import BackIcon from "../../icons/BackIcon"
interface Props{
    className?: string;
    onClick?: (event:MouseEvent<HTMLButtonElement>) => void;
}
function ButtonBack({className="" , onClick}:Props){
    return (
        <button className={`backButton ${className}`} onClick={onClick} >
        <BackIcon className="backIcon"/>
        </button>
    )
}
export default ButtonBack;

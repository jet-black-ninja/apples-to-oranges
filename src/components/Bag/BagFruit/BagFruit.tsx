import { useStoreContext } from "../../../Context";
import { Link } from "react-router-dom";
import "../../../styles/BagFruit.scss";
import getImageSrc from "../../../utils/getImageSrc";
import InStock from "../../shared/InStock";
import EditQuantity from "../../shared/EditQuantity";
import DeleteIcon from "../../../icons/DeleteIcon";

export default function BagFruit({ fruit }) {
    const {setFruits} = useStoreContext();
    const {id, name, slug, family, price, quantity}= fruit;
    const handleDelete = () => {
        setFruits((prevFruits) => prevFruits.map((f) => (f.id === id ? { ...f, inBag: false } : f)));
    };

    return (
        <li className ="bagFruit">
            <div className= "leftContainer">
                <Link to={`/store/${slug}`}>
                <div className="imageContainer">
                    <img className="image" src={getImageSrc(slug)} alt={name}/>
                </div>
                </Link>

                <div className="infoAndQuantity">
                    <div className="info">
                        <h3>{name}</h3>
                        <h4 className="family">{family} Family</h4>
                        <InStock/>
                        <div className="qty">Qty: {quantity}</div>
                    </div>
                    <EditQuantity fruit={fruit}/>
                </div>
            </div>

            <div className="rightContainer">
                <div className="delete" onClick={handleDelete}>
                    <DeleteIcon className="deleteIcon"/>
                </div>
                <h5 className="price">${(price * quantity).toFixed(1)}</h5>
            </div>
        </li>
    )

}
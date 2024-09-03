import { Link } from "react-router-dom";
import styles from "./Home.module.scss"
import HomeCarousel from "./Home Carousel/HomeCarousel";

export default function Home (){
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>Welcome to Apples To Oranges</h1>
            <p className={styles.description}>
                Discover our selection of fresh fruits, bursting with flavor and vitality. Delivered
                straight from the farm to your table.
            </p>
            <Link to="/store">
                <button className={styles.storeButton}> Shop Now</button>
            </Link>
            <HomeCarousel/>
        </div>
    );
};
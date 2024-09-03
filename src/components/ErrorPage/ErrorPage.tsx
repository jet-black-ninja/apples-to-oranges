import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

export default function ErrorPage(){
    return (
        <div className={styles.errorPage}>
      <h1>Oooops 😬</h1>
      <div className={styles.errorBody}>
        <h2>404 - Page Not Found 😵</h2>
        <Link to="/">
          <div className={styles.homeLink}>You can go back home 🍎 by clicking here!</div>
        </Link>
      </div>
    </div>
    )
}
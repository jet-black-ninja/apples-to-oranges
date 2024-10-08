import { useStoreContext } from "../../../Context";
import { Link } from "react-router-dom";
import styles from "./NavbarFavorite.module.scss"
import FavoriteIcon from "../../../icons/FavoriteIcon";

export default function NavbarFavorite() {
  const { fruits, filters, setFilters } = useStoreContext();
  const { favorite } = filters;

  const handleFavoriteClick = () => {
    setFilters({ ...filters, favorite: !favorite });
  };

  const favoriteCount = fruits.filter((fruit) => fruit.isFavorite).length;

    return (
      <Link to="/store">
          <div className={styles.navbarFavorite}>
            <FavoriteIcon
              className={styles.favorite}
              isFilled={favorite}
              onClick={handleFavoriteClick}
            />
            <div className={styles.number}>{favoriteCount}</div>
          </div>
    </Link>
  );
}
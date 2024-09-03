import { useStoreContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import styles from "./NavbarSearch.module.scss"
import SearchIcon from "../../../icons/SearchIcon";
export default function NavbarSearch(){
    const {filters, setFilters} = useStoreContext();
    const {query} = filters;
    const navigate = useNavigate();

    const handleChange =(event) =>{
        const newQuery = event.target.value;
        setFilters({...filters, query:newQuery});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search`);
    };

    return (
        <form className = {styles.navbarSearch} onSubmit={handleSubmit}>
            <SearchIcon className={styles.searchIcon}/>
            <input 
            className={styles.searchInput}
            type="text" 
            placeholder="Search"
            value={query}
            onChange={handleChange}/>
        </form>
    )
}
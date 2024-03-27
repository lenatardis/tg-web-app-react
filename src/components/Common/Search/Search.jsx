import styles from "./Search.module.scss";
import IconSearch from "../../../assets/images/search.svg";
const SearchInput = ({name, value, onSearch}) => {

    const handleChange = (e) => {
        onSearch(e.target.value);
    }

    return (
        <label className={styles['search-wrapper']}>
            <input type="search" name={name} value={value} className="search-input" autoCorrect="off" autoCapitalize="none" spellCheck="false" onChange={handleChange}/>
            <img src={IconSearch} alt=""/>
        </label>
    );
};


export default SearchInput;
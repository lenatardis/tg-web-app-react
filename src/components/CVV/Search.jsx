import styles from "./Search.module.scss";
const SearchInput = ({name, value, onSearch, src}) => {

    const handleChange = (e) => {
        onSearch(e.target.value);
    }

    return (
        <label className={styles['search-wrapper']}>
            <input type="search" name={name} value={value} className="search-input" autoCorrect="off" autoCapitalize="none" spellCheck="false" onChange={handleChange}/>
            <img src={src} alt=""/>
        </label>
    );
};


export default SearchInput;
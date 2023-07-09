import { useState } from "react";
import { fetchBooksBySearchTerm } from "../../services/book-services";
import styles from './SearchBar.module.scss'
export function SearchBar({ handleSubmit }) {
    const [searchInput, setSearchInput] = useState("");

    const onChange = (e) => {
        setSearchInput(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(searchInput);
        console.log(searchInput);
        setSearchInput("");
    }

    return (
        <section className={styles["main__search"]}>
            <form className={styles["main__search-form"]} onSubmit={onSubmit}>
                <label htmlFor="search" className="main__search-label"><h3>Keywords</h3></label>
                <input type="text" name="search" id="search" className="main__search-input" value ={searchInput} onChange={onChange}/>
                <div className="main__search-btns">
                    <button className='main__clear-button'>Clear</button><button className="main__search-button">Search</button>
                </div>
            </form>
        </section>
    );
}

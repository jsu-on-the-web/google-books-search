import { useState } from "react";
import { fetchBooksBySearchTerm } from "../../services/book-services";
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
        <section className="main__search">
            <form className="main__search-form" onSubmit={onSubmit}>
                <label htmlFor="search" className="main__search-label">Keywords</label>
                <input type="text" name="search" id="search" className="main__search-input" value ={searchInput} onChange={onChange}/>
                <button className='main__clear-button'>Clear</button><button className="main__search-button">Search</button>
            </form>
        </section>
    );
}

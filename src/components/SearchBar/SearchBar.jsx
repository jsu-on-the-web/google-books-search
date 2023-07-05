import React from "react";
export function SearchBar() {
    return (
        <section className="main__search">
            <form action="" className="main__search-form">
                <label htmlFor="search" className="main__search-label">Keywords</label>
                <input type="text" name="search" id="search" className="main__search-input" />
                <button className='main__clear-button'>Clear</button><button className="main__search-button">Search</button>
            </form>
        </section>
    );
}

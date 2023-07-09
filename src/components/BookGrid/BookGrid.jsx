import { useState, useEffect } from "react";
import { BookCard } from "../BookCard/BookCard";
import styles from './BookGrid.module.scss';

export function BookGrid({ results }) {
    // An array to hold the arrays data to pass down into BookCards
    const [bookData, setBookData] = useState([]);


    const extractData = (results) => {
        setBookData(results); // TODO: 
    }

    return (
        <section className={styles["book-grid"]}>
            {results.map((bookInfo) => (
                <BookCard key={bookInfo.id} coverThumbnailSrc={bookInfo.thumbnail} title={bookInfo.title} authors={bookInfo.authors.join(', ')} description={bookInfo.description.substring(0, 200) + '...'} />
            ))}
        </section>
    );
}

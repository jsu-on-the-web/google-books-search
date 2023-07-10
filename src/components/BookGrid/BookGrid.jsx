import { useState, useEffect } from "react";
import { BookCard } from "../BookCard/BookCard";
import styles from './BookGrid.module.scss';

export function BookGrid({ results }) {
    // An array to hold the arrays data to pass down into BookCards
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        if (results) {
            setBookData(results);
        }
    }, [results]);

    // We don't want to render the book grid if there's no results
    if (!results) {
        return null;
    }

        return (
            <section className={styles["book-grid"]}>
                {results.map((bookInfo) => (
                    <BookCard key={bookInfo.id} coverThumbnailSrc={bookInfo.thumbnail} title={bookInfo.title} authors={bookInfo.authors} description={bookInfo.description} />
                ))}
            </section>
        );
    }

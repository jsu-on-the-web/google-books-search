import { useState, useEffect } from "react";
import { BookCard } from "../BookCard/BookCard";
import { BookModal } from "../BookModal/BookModal";
import styles from './BookGrid.module.scss';

export function BookGrid({ results }) {
    // An array to hold the arrays data to pass down into BookCards
    const [bookData, setBookData] = useState([]);

    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        if (results) {
            setBookData(results);
        }
    }, [results]);

    const handleBookClick = (book) => {
        setSelectedBook(book);
    };

    const handleModalClose = () => {
        setSelectedBook(null);
    };

    // We don't want to render the book grid if there's no results
    if (!results) {
        return null;
    }

        return (
            <section className={styles["book-grid"]}>
                {bookData.map((bookInfo) => (
                    <BookCard key={bookInfo.id} coverThumbnailSrc={bookInfo.thumbnail} title={bookInfo.title} authors={bookInfo.authors} description={bookInfo.description} onClick={handleBookClick}/>
                ))}
                {selectedBook && (
                    <BookModal book={selectedBook} onClose={handleModalClose} />
                )}
            </section>
        );
    }

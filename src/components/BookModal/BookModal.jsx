import { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import { createPortal } from 'react-dom';
import { getEmoji } from "language-flag-colors";
import styles from './BookModal.module.scss'
export function BookModal({ book, onClose }) {
    const bookDescription = book.description ? book.description.substring(0, 500) + '...' : 'N/A';
    const bookAuthors = book.authors ? book.authors.join(', ') : 'N/A';

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.keyCode === 27) {
                // Close the modal on Escape key press
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscKey);
        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [onClose]);

    if (book === null) {
        return null;
    }
    return (
        <section className={styles["book-modal-container"]}>
            <div className={styles['book-modal']}>
                <img src={book.thumbnail} alt="" className='book-modal__image' />
                <h3 className='book-modal__title'>{book.title}</h3>
                <h4 className='book-modal__author'>{bookAuthors}</h4>
                <h4 className='book-modal__publisher'>{book.publisher}</h4>
                <h4 className='book-modal__published-date'>{book.publishedDate}</h4>
                <p className='book-modal__average-rating'><Rating value={book.averageRating} precision={0.5} readOnly /></p>
                <p className='book-modal__description'>{bookDescription}</p>
                {/* <p className='book-modal__language'>  Language: <img src={getImage(book.language)}></img></p> */}
            </div>
        </section>
    );
}

export default BookModal;
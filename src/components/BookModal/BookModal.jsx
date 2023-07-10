import { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import { usePortal } from 'react-dom';
import { getEmoji } from "language-flag-colors";
import styles from './BookModal.module.scss'
export function BookModal({ book, onClose }) {


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
        <div className={styles['book-modal']}>
            <img src="https://picsum.photos/200" alt="" className='book-modal__image' />
            <h3 className='book-modal__title'>Title</h3>
            <h4 className='book-modal__author'>Author</h4>
            <p className='book-modal__description'>Description</p>
            <p className='book-modal__publisher'>Publisher</p>
            <p className='book-modal__language'>Language</p>
            <p className='book-modal__published-date'>Published Date</p>
            <p className='book-modal__average-rating'>Average Rating</p>
        </div>
    );
}

export default BookModal;
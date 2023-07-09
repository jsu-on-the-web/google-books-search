import { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import { usePortal } from 'react-dom';
import { LanguageFlag, getEmoji } from "language-flag-colors";
import styles from './BookModal.module.scss'
export function BookModal({ }) {
    return (
        <div className={styles['book-modal']}>
            <img src="https://picsum.photos/200" alt="" className='book-modal__image' />
            <h3 className='book-modal__title'>Book</h3>
            <p className='book-modal__author'>Author</p>
            <p className='book-modal__description'>Description</p>
            <p className='book-modal__publisher'>Publisher</p>
            <p className='book-modal__language'>Language</p>
            <p className='book-modal__published-date'>Published Date</p>
            <p className='book-modal__average-rating'>Average Rating</p>
        </div>
    );
}

export default BookModal;
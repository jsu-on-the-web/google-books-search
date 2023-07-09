import { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import { usePortal } from 'react-dom';
export function BookModal({ }) {
    return <section className='book-modal'>
        <img src="https://picsum.photos/200" alt="" className='book-modal__image' />
        <h3 className='book-modal__title'>Book</h3>
        <p className='book-modal__author'>Author</p>
        <p className='book-modal__description'>Description</p>
        <p className='book-modal__publisher'>Publisher</p>
        <p className='book-modal__language'>Language</p>
        <p className='book-modal__published-date'>Published Date</p>
        <p className='book-modal__average-rating'>Average Rating</p>
    </section>;
}

export default BookModal;
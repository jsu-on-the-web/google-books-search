import { useState, useEffect } from "react";
import styles from './BookCard.module.scss'

export function BookCard({ coverThumbnailSrc = "https://picsum.photos/200", title, authors, description }) {
  const [bookDescription, setBookDescription] = useState('');
  const [bookAuthors, setBookAuthors] = useState('');

  // Use effects to check the author and description and replace them with N/As if not present.
  useEffect(() => {
    if (description) {
      setBookDescription(description.substring(0, 200) + '...');
    } else {
      setBookDescription("N/A");
    }
  }, [description]);
  
  useEffect(() => { 
    if (authors) { 
      setBookAuthors(authors.join(', '));
    } else {
      setBookAuthors("N/A");
    }
  }, [authors]);

  return (
    <div className={styles["results-card"]}>
      <img src={coverThumbnailSrc} className='results-card__image' />
      <h3 className='results-card__title'>{title}</h3>
      <h4 className='results-card__author'>{bookAuthors}</h4>
      <p className='results-card__description'>{bookDescription}</p>
    </div>
  );
}

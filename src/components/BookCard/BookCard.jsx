import React from "react";
import styles from './BookCard.module.scss'

export function BookCard({ coverThumbnailSrc = "https://picsum.photos/200", title, authors, description }) {
  return (
    <div className={styles["results-card"]}>
      <img src={coverThumbnailSrc} className='results-card__image' />
      <h3 className='results-card__title'>{title}</h3>
      <h4 className='results-card__author'>{authors}</h4>
      <p className='results-card__description'>{description}</p>
    </div>
  );
}

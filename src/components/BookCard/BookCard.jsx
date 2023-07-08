import React from "react";
import './BookCard.module.scss'

export function BookCard({ coverThumbnailSrc = "https://picsum.photos/200", title, authors, description }) {
  return (
    <div className='main__results-card'>
      <img src={coverThumbnailSrc} className='main__results-image' />
      <h3 className='main__results-title'>{title}</h3>
      <h4 className='main__results-author'>{authors}</h4>
      <p className='main__results-description'>{description}</p>
    </div>
  );
}

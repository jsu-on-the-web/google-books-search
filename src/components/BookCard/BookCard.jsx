import React from "react";
export function BookCard({}) {
  return <div className='main__results-card'>
            <img src="https://picsum.photos/200" className='main__results-image' />
            <h3 className='main__results-title'>Title</h3>
            <h4 className='main__results-author'>Author</h4>
            <p className='main__results-description'>Description</p>
          </div>;
}
  
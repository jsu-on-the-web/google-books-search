import { useState, useEffect } from "react";
import { BookCard } from "../BookCard/BookCard";

export function BookGrid({ results }) {
    // An array to hold the arrays data to pass down into BookCards
    const [bookData, setBookData] = useState([]);


    const extractData = (results) => {
        setBookData(results); // TODO: 
    }

    return (
        <section className="book-grid">
            {results.map((bookInfo) => (
                // TODO: Passing the info into the BookCard component as props
                <BookCard key={bookInfo.id} coverThumbnailSrc={bookInfo.thumbnail} title={bookInfo.title} authors={bookInfo.authors.join(', ')} description={bookInfo.description} />
            ))}
        </section>
    );
}

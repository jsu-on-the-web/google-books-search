import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { BookGrid } from '../../components/BookGrid/BookGrid';
import { extractBookFetchData, fetchBooksBySearchTerm } from '../../services/book-services';

const BookLoader = ({ searchTerm = "" }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [ error, setError ] = useState(null);

    const [books, setBooks] = useState([]);

    useEffect(() => {

        // Check if the search term is empty
        if (searchTerm === "") {
            return;
        }

        // Reset the error and book states
        setError(null);
        setBooks([]);

        // Start loading
        setIsLoading(true);

        fetchBooksBySearchTerm(searchTerm)
            .then(books => {
                const cleanBooks = extractBookFetchData(books);
                setBooks(cleanBooks);
            })
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }, [searchTerm]);

    return (
        <>
            {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
            {!isLoading && error && <p>{error.message}</p>}
            {!isLoading && books.length > 0 && <BookGrid results={books} />}
        </>
    )
}

export default BookLoader
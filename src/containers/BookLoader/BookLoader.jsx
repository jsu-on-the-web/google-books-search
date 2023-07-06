import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { BookGrid } from '../../components/BookGrid/BookGrid';
import { fetchBooksBySearchTerm } from '../../services/book-services';

const BookLoader = ({ searchTerm }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { error, setError } = useState(null);

    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Reset the error and jokes states
        setError(null);
        setBooks([]);

        // Start loading
        setIsLoading(true);

        fetchBooksBySearchTerm(searchTerm)
            .then(books => setBooks(books))
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
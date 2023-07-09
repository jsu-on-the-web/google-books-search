import { SearchStatusFailError, NoBooksFoundError } from "./errors.js";

/*----------  Function Declaration  ----------*/



/**
 * Fetches books from Google Books API based on a search term.
 *
 * @param {string} searchTerm - The term to search for books.
 * @return {Promise<Array>} An array of book objects.
 */
export const fetchBooksBySearchTerm = async (searchTerm = '') => {
    //todo: Have option for what to search by? (e.g author, title, genre)

    // Google Books can take spaces in the search term, but they need to be substituted with %20
    //const cleanedSearchTerm = cleanStringForSearch(searchTerm);

    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20`
    );

    if (!response.ok) {
        throw SearchStatusFailError;
    }

    const data = await response.json();
    if (data.items === undefined || data.items.length === 0) {
        throw NoBooksFoundError;
    }

    //console.log(data.items);
    // STUB: Use something like the parameters below to set the description for the BookCards
    //console.log((data.items[0].volumeInfo.description).substring(0, 100) + "...");

    // STUB: Destructuring testing
    // const { title, authors, description } = data.items[0].volumeInfo;
    // let authorString = authors.join(', ');
    // console.log(title, authorString, description);
    return data.items;
}

export const extractBookFetchData = (inputData) => {
    return inputData.map((book) => {
        // Destructure the data we need from the BookInfo object
        const { title, authors, description, averageRating = 0, language, publishedDate, publisher } = book.volumeInfo;
        const thumbnail = book.volumeInfo.imageLinks?.thumbnail;

        return {
            title,
            authors,
            description,
            thumbnail,
            averageRating,
            language,
            publishedDate,
            publisher
        };
    })
}

/**
 * Cleans the given string for search by replacing spaces with "%20".
 *
 * @param {string} searchTerm - The string to clean for search.
 * @return {string} The cleaned string for search.
 */
// const cleanStringForSearch = (searchTerm) => {
//     console.log(searchTerm.replace(/ /g, "%20"));
//     return searchTerm.replace(/ /g, "%20");
// }

//fetchBooksBySearchTerm('reading books');
console.log(extractBookFetchData(await fetchBooksBySearchTerm('hobbit')))
/*----------  Variable Declaration  ----------*/




/*----------  Script assignment  ----------*/




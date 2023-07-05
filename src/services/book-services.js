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
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );

    if (!response.ok) {
        throw SearchStatusFailError;
    }

    const data = await response.json();
    if (data.items.length === 0) {
        throw NoBooksFoundError;
    }

    //console.log(data.items);
    // STUB: Use something like the parameters below to set the description for the BookCards
    console.log((data.items[0].volumeInfo.description).substring(0, 100) + "...");
    return data.items;
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

console.log(fetchBooksBySearchTerm('reading books'));
/*----------  Variable Declaration  ----------*/




/*----------  Script assignment  ----------*/




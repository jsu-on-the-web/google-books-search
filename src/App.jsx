import { SearchBar } from './components/SearchBar/SearchBar';
import { PageDescription } from './components/PageDescription/PageDescription';
import { Header } from './components/Header/Header';
import { useState, useEffect } from 'react'
import './App.scss'
import BookLoader from './containers/BookLoader/BookLoader';



function App() {
  const [searchTerm, setSearchTerm] = useState(" ");

  const handleSearch = (value) => {
    setSearchTerm(value);
  }

  return (
    // 1. Heading bar, google coloured text and a padding of 0.5rem
    // 2. Section explaining what the page is about
    // 3. Keywords search bar, rounded corners for search bar and buttons
    // 4. Grid of book results, 5 columns in a desktop enviroment, 4 columns in a tablet environment, 3 columns in a phone environment
    <>
      <Header />
      <main>
        <PageDescription />
        <SearchBar handleSubmit={handleSearch} />
        <BookLoader searchTerm={searchTerm} />
      </main>
    </>
  )
}

export default App;
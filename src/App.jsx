import { SearchBar } from './components/SearchBar/SearchBar';
import { BookGrid } from './components/BookGrid/BookGrid';
import { BookCard } from './components/BookCard/BookCard';
import { PageDescription } from './components/PageDescription/PageDescription';
import { Header } from './components/Header/Header';
import { useState, useEffect } from 'react'
import './App.scss'



function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    // 1. Heading bar, google coloured text and a padding of 0.5rem
    // 2. Section explaining what the page is about
    // 3. Keywords search bar, rounded corners for search bar and buttons
    // 4. Grid of book results, 5 columns in a desktop enviroment, 4 columns in a tablet environment, 3 columns in a phone environment
    <>
      <Header />
      <main>
        <PageDescription />
        <SearchBar />
        <BookGrid />
      </main>
    </>
  )
}

export default App;
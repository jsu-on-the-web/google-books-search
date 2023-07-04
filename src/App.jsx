import { useState, useEffect } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    // 1. Heading bar, google coloured text and a padding of 0.5rem
    // 2. Section explaining what the page is about
    // 3. Keywords search bar, rounded corners for search bar and buttons
    // 4. Grid of book results, 5 columns in a desktop enviroment, 4 columns in a tablet environment, 3 columns in a phone environment
    <>
      <header><h1>Google Books Search</h1></header>
      <main>
        <section className="main__description">
          <h2>Search Books</h2>
          <p>Enter keywords to find books in the Google Books database.</p>
        </section>
        <section className="main__search">
          <form action="" className="main__search-form">
            <label htmlFor="search" className="main__search-label">Keywords</label>
            <input type="text" name="search" id="search" className="main__search-input" />
            <button className='main__clear-button'>Clear</button><button className="main__search-button">Search</button>
          </form>
        </section>
        <section className='main__results'></section>
      </main>
    </>
  )
}

export default App

import React from "react";
import { BookCard } from "../BookCard/BookCard";
export function BookGrid({}) {
  return <section className='main__results'>
          <BookCard title="Test" author="John Doe" description="This is a book" />
        </section>;
}
  
import { useState } from 'react';
import Book from '../component/Book';
import AddBookForm from '../component/AddBookForm';
import collectionDetail from '../assets/book-data.json';
// import janeAustenSet from '../assets/jane-austen-set.webp';
// import bronteSet from '../assets/bronte-set.webp';
// import harryPotterSet from '../assets/harry-potter-set.webp';
// import unfortunateEventsSet from '../assets/unfortunate-events-set.webp';
// import lotrSet from '../assets/lotr-book-set.webp';
// import wheelOfTimeSet from '../assets/wheel-of-time-set.webp';

export function Home() {
    const [books, setBooks] = useState(collectionDetail);
    const addBook = (newBook) => {
        setBooks((prevBooks) => [...prevBooks, newBook]);
      };
    
      const deleteBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
      };
    
      const duplicateBook = (id) => {
        const bookToDuplicate = books.find((book) => book.id === id);
        if (bookToDuplicate) {
          const newBook = { ...bookToDuplicate, id: Date.now() }; // ensure unique id
          setBooks([...books, newBook]);
        }
}
return(
    <div className="container">
      <h1>Book Sets I Want</h1>
      <table>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Year Published</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book
              key={book.id}  // Ensure unique key prop is passed
              book={book}
              isHighlighted={book.yearPublished < 1950}
              onDelete={deleteBook}
              onDuplicate={duplicateBook}
            />
          ))}
        </tbody>
      </table>

      {/* Add the AddBookForm component */}
      <AddBookForm onAddBook={addBook} />
    </div>
);
}
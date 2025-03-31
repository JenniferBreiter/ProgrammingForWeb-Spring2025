
import { useState } from 'react';
import Book from './component/Book';
import './App.css';
import AddBookForm from './component/AddBookForm';
import janeAustenSet from './assets/jane-austen-set.webp';
import bronteSet from './assets/bronte-set.webp';
import harryPotterSet from './assets/harry-potter-set.webp';
import unfortunateEventsSet from './assets/unfortunate-events-set.webp';
import lotrSet from './assets/lotr-book-set.webp';
import wheelOfTimeSet from './assets/wheel-of-time-set.webp';

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Jane Austen: Delicious Solitude',
      author: 'Jane Austen',
      genre: 'Classic Literature',
      yearPublished: '1811 - 1817',
      image: janeAustenSet,
      description: 'A collection of Jane Austen\'s most beloved novels, including Pride and Prejudice and Sense and Sensibility.',
    },
    {
      id: 2,
      title: 'Brontë Sisters: Monet Impressionist Painting Set',
      author: 'Charlotte, Emily, and Anne Brontë',
      genre: 'Classic Literature',
      yearPublished: '1847 - 1853',
      image: bronteSet,
      description: 'Includes the timeless works of the Brontë sisters, featuring Jane Eyre, Wuthering Heights, and The Tenant of Wildfell Hall.',
    },
    {
      id: 3,
      title: 'Harry Potter: Hogwarts Express Set',
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      yearPublished: '1997 - 2007',
      image: harryPotterSet,
      description: 'Follow Harry Potter and his friends as they battle dark magic, uncover secrets, and grow into heroes.',
    },
    {
      id: 4,
      title: 'A Series of Unfortunate Events',
      author: 'Lemony Snicket',
      genre: 'Children\'s Fiction',
      yearPublished: '1999 - 2006',
      image: unfortunateEventsSet,
      description: 'The tragic yet thrilling tale of the Baudelaire orphans as they evade the sinister Count Olaf.',
    },
    {
      id: 5,
      title: 'Tolkien’s Epic Journey: The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      yearPublished: '1954 - 1955',
      image: lotrSet,
      description: 'An epic high-fantasy adventure where Frodo Baggins and his companions set out to destroy the One Ring.',
    },
    {
      id: 6,
      title: 'The Wheel of Time',
      author: 'Robert Jordan & Brandon Sanderson',
      genre: 'Fantasy',
      yearPublished: '1990 - 2013',
      image: wheelOfTimeSet,
      description: 'A sprawling fantasy series filled with prophecy, powerful magic, and the battle between light and darkness.',
    },
  ]);

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
  };

  return (
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

export default App;

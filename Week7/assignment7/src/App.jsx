import Book from "./component/Book";
import './App.css';
import janeAustenSet from "./assets/jane-austen-set.webp";
import bronteSet from "./assets/bronte-set.webp";
import harryPotterSet from "./assets/harry-potter-set.webp";
import unfortunateEventsSet from "./assets/unfortunate-events-set.webp";
import lotrSet from "./assets/lotr-book-set.webp";
import wheelOfTimeSet from "./assets/wheel-of-time-set.webp";

function App() {
  const books = [
    {
      title: "Jane Austen: Delicious Solitude",
      author: "Jane Austen",
      genre: "Classic Literature",
      yearPublished: "1811 - 1817",
      image: janeAustenSet,
      description: "A collection of Jane Austen's most beloved novels, including Pride and Prejudice and Sense and Sensibility, exploring themes of love, society, and personal growth."
    },
    {
      title: "Brontë Sisters: Monet Impressionist Painting Set",
      author: "Charlotte, Emily, and Anne Brontë",
      genre: "Classic Literature",
      yearPublished: "1847 - 1853",
      image: bronteSet,
      description: "This set includes the timeless works of the Brontë sisters, featuring Jane Eyre, Wuthering Heights, and The Tenant of Wildfell Hall, filled with passionate romance and gothic drama."
    },
    {
      title: "Harry Potter: Hogwarts Express Set",
      author: "J.K. Rowling",
      genre: "Fantasy",
      yearPublished: "1997 - 2007",
      image: harryPotterSet,
      description: "Follow Harry Potter and his friends as they battle dark magic, uncover secrets, and grow from young students into heroes in the wizarding world."
    },
    {
      title: "A Series of Unfortunate Events",
      author: "Lemony Snicket",
      genre: "Children's Fiction",
      yearPublished: "1999 - 2006",
      image: unfortunateEventsSet,
      description: "The tragic yet thrilling tale of the Baudelaire orphans as they evade the sinister Count Olaf and uncover dark family secrets."
    },
    {
      title: "Tolkien’s Epic Journey: The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      yearPublished: "1954 - 1955",
      image: lotrSet,
      description: "An epic high-fantasy adventure where Frodo Baggins and his companions set out to destroy the One Ring and defeat the dark lord Sauron."
    },
    {
      title: "The Wheel of Time",
      author: "Robert Jordan & Brandon Sanderson",
      genre: "Fantasy",
      yearPublished: "1990 - 2013",
      image: wheelOfTimeSet,
      description: "A sprawling fantasy series filled with prophecy, powerful magic, and the battle between light and darkness as Rand al'Thor discovers his destiny."
    }
  ];
  

  return (
    <div>
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
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <Book key={index} book={book} isHighlighted={book.yearPublished < 1950} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App

import React from "react";
import { Link } from 'react-router-dom';


const Book = ({ book, isHighlighted, onDelete, onDuplicate }) => {
  return (
    <tr style={{ backgroundColor: isHighlighted ? "#ffebcd" : "white" }}>
      <td><img src={book.image} alt={book.title} width="100" /></td>
      <td>
        <Link to={`${book.id}`}>{book.title}</Link>
      </td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.yearPublished}</td>
      <td className="book-description">{book.description}</td> {/* Left-aligned description */}
      <td>
        <button className="duplicate-btn" onClick={() => onDuplicate(book.id)}>Duplicate</button>
        <button className="delete-btn" onClick={() => onDelete(book.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Book;

  
  
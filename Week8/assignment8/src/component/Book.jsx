import React from "react";

const Book = ({ book, isHighlighted, onDelete, onDuplicate }) => {
  return (
    <tr style={{ backgroundColor: isHighlighted ? "#ffebcd" : "white" }}>
      <td><img src={book.image} alt={book.title} width="100" /></td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.yearPublished}</td>
      <td>{book.description}</td>
      <td>
        <button className="duplicate-btn" onClick={() => onDuplicate(book.id)}>Duplicate</button>
        <button className="delete-btn" onClick={() => onDelete(book.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Book;

  
  
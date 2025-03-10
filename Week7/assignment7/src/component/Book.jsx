function Book({ book, isHighlighted }) {
    return (
      <tr className={isHighlighted ? "highlighted-row" : ""}>
        <td>
          <img src={book.image} alt={book.title} className="book-image" />
        </td>
        <td><strong>{book.title}</strong></td>
        <td>{book.author}</td>
        <td>{book.genre}</td>
        <td>{book.yearPublished}</td>
        <td>{book.description}</td>
      </tr>
    );
  }
  
  export default Book;
  
  
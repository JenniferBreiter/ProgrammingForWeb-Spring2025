
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";


export function CollectionDetail({ data }) {
    const { id } = useParams();
    const numericId = Number(id); // convert string to number
    const selectedBook = data.find((book) => book.id === numericId);
    return (
    <div className="detail-page">
      <Link to="/">← Return to List</Link>
      <h1>{selectedBook.title}</h1>
      <img src={selectedBook.image} alt={selectedBook.title} width="300" />
      <p><strong>Author:</strong> {selectedBook.author}</p>
      <p><strong>Genre:</strong> {selectedBook.genre}</p>
      <p><strong>Year Published:</strong> {selectedBook.yearPublished}</p>
      <p>{selectedBook.description}</p>
      <h3>Synopsis:</h3>
      <p>{selectedBook.synopsis}</p>
    </div>
  );
}

CollectionDetail.propTypes = {
  data: PropTypes.array
};
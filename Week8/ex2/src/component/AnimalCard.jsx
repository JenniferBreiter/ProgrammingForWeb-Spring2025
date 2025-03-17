export default function AnimalCard({ name, onFocus, onDelete }) {
    return (
      <div className="animal-card">
        <h2>{name}</h2>
        <div className="button-group">
          <button className="focus-btn" onClick={() => onFocus(name)}>
            Focus
          </button>
          <button className="delete-btn" onClick={() => onDelete(name)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
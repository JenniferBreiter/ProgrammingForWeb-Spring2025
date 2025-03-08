

function Camelid({ name, image, trivia }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} style={{ width: "300px", height: "300px", borderRadius: "10px" }} />
      <p>{trivia}</p>
    </div>
  );
}

export default Camelid;
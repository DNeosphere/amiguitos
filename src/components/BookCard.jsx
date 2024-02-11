import { Link } from "react-router-dom";

import "./styles/book.scss";

function BookCard({ props }) {
  return (
    <div className="book">
      <div className="book__img-container">
        <h2 className="book__title">{props.name}</h2>
        <img
          className="book__image"
          src={props.image}
          alt="Foto de un libro"
        />
      </div>

      <div className="book__description">
        <p>
          <span>Author: </span>
          {props.author}
        </p>
        <p>
          <span>Género: </span>
          {props.genre}
        </p>
        <p>
          <span>ISBN: </span>
          {props.isbn}
        </p>
        <p>
          <span>Lenguaje: </span>
          {props.language}
        </p>
        <p>
          <span>Descripción: </span>
          {props.description}
        </p>
      </div>
      <div className="book__button-wrapper">
        <Link to={`/book/${props.id}`}>
          <button>Solicitar libro</button>
        </Link>
      </div>
    </div>
  );
}

export default BookCard;

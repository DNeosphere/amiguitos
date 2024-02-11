import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import locations from "../assets/mockdata/locations.json";
import "./styles/bookDetail.scss";

function BookDetail() {
  const { id } = useParams();
  const idNumber = parseInt(id);

  const locationBook = [];

  locations.forEach((location) => {
    const book = location.books.find(
      (book) => book.id === idNumber
    );

    if (book) {
      locationBook.push(book);
    }
  });

  const [location] = locationBook;

  return (
    <div className="book-detail content">
      <div className="book-detail__container">
        <h1>Espero que disfrutes este libro y ayudes a fomentar la lectura!</h1>
        <div className="book-detail__info">
          <p>Actualmente este libro se encuentra en:</p>
          <p>
            <span>Tienda/Biblioteca: </span>
            {location.name}
          </p>
          <p>
            <span>Ciudad: </span>
            {location.city}
          </p>
          <p>
            <span>Dirección: </span>
            {location.address}
          </p>
          <p>
            <span>Teléfono/Celular: </span>
            {location.phone}
          </p>
        </div>
        <div className="book-detail__logo">
          <FontAwesomeIcon className="book-detail__logo__paw" icon={faBook} />
          Libros
        </div>
      </div>
    </div>
  );
}

export default BookDetail;

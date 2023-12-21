import { Link } from "react-router-dom";

import "./styles/amiguito.scss";

function AmiguitoCard({ props }) {
  return (
    <div className="amiguito">
      <div className="amiguito__img-container">
        <h2 className="amiguito__title">{props.name}</h2>
        <img
          className="amiguito__foto"
          src={props.foto}
          alt="Foto de un perrito"
        />
      </div>

      <div className="amiguito__description">
        <p>
          <span>Especie: </span>
          {props.especie}
        </p>
        <p>
          <span>Edad: </span>
          {props.age}
        </p>
        <p>
          <span>Tamaño: </span>
          {props.size}
        </p>
        <p>
          <span>Peso: </span>
          {props.weight}
        </p>
        <p>
          <span>Notas: </span>
          {props.notes}
        </p>
      </div>
      <Link to={`/amiguito/${props.id}`}>
        <button>Ven a conocerme</button>
      </Link>
    </div>
  );
}

export default AmiguitoCard;

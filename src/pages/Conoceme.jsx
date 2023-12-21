import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import locaciones from "../assets/mockdata/locaciones.json";
import "./styles/conoceme.scss";

function Conoceme() {
  const { id } = useParams();
  const idNumber = parseInt(id);

  const locacionAmiguito = [];

  locaciones.forEach((locacion) => {
    const mascota = locacion.mascotas.find(
      (mascota) => mascota.id === idNumber
    );

    if (mascota) {
      locacionAmiguito.push(locacion);
    }
  });

  const [locacion] = locacionAmiguito;

  return (
    <div className="conoceme content">
      <div className="conoceme__container">
        <h1>Muchas gracias por interesarte en este amiguito!</h1>
        <div className="conoceme__info">
          <p>Actualmente este amiguito se encuentra en:</p>
          <p>
            <span>Refugio: </span>
            {locacion.nombre}
          </p>
          <p>
            <span>Ciudad: </span>
            {locacion.ciudad}
          </p>
          <p>
            <span>Dirección: </span>
            {locacion.direccion}
          </p>
          <p>
            <span>A cargo del amiguito se encuentra: </span>
            {locacion.responsable}
          </p>
          <p>
            <span>
              Para agendar una cita u obtener más info sobre este amiguito,
              puedes ponerte en contacto con:
            </span>
            {locacion.contacto}
          </p>
        </div>
        <div className="conoceme__logo">
          <FontAwesomeIcon className="conoceme__logo__paw" icon={faPaw} />
          Amiguitos
        </div>
      </div>
    </div>
  );
}

export default Conoceme;

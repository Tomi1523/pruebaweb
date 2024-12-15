import React, { useState } from "react";

const Cuadrados = ({ jugadores, setJugadores }) => {
  const [selectedJugador, setSelectedJugador] = useState(""); // Estado para el jugador seleccionado

  const handleShow = (jugador) => {
    setSelectedJugador(jugador); // Establece el jugador seleccionado
  };

  return (
    <div className="container">
      <div className="row">
        {/* Mapeo para crear una tarjeta por cada jugador */}
        {jugadores.map((jugador) => (
          <div className="col-md-4 mb-4" key={jugador.id}>
            {/* Cambia col a col-md-4 para 3 columnas por fila */}
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{jugador.nombre}</h4>
                <h6>{jugador.equipo}</h6>
                <h6>{jugador.dorsal}</h6>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => handleShow(jugador)} // Muestra el jugador seleccionado
                >
                  Ver Jugador
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {selectedJugador ? selectedJugador.nombre : "Modal title"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <h6>Equipo: {selectedJugador.equipo}</h6>
                <h6>Dorsal: {selectedJugador.dorsal}</h6>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuadrados;

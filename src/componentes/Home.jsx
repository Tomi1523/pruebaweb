import React, { useState } from "react";

const Home = ({ jugadores, setJugadores }) => {
  

  const [nombre, setNombre] = useState("");
  const [equipo, setEquipo] = useState("");
  const [dorsal, setDorsal] = useState("");

  const agregarJugador = (e) => {
    e.preventDefault();
    const nuevoJugador = {
      id: jugadores.length + 1,
      nombre,
      equipo,
      dorsal,
    };

    setJugadores([...jugadores, nuevoJugador]);
    setNombre("");
    setEquipo("");
    setDorsal("");
  };

  const changeJugador = (e) =>{
    setNombre(e.target.value)
  }

  const changeEquipo = (e) =>{
    setEquipo(e.target.value)
  }

  const changeDorsal = (e) =>{
    setDorsal(e.target.value)
  }

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-4">
          <h2>Agregar Jugador</h2>
          <form onSubmit={agregarJugador}>
            <div className="mb-3">
              <label htmlFor="nombreJugador" className="form-label">
                Jugador
              </label>
              <input
                type="text"
                className="form-control"
                id="nombreJugador"
                value={nombre}
                onChange={changeJugador}
                placeholder="Nombre del jugador"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="dorsalJugador" className="form-label">
                Dorsal
              </label>
              <input
                type="text"
                className="form-control"
                id="dorsalJugador"
                value={dorsal}
                onChange={changeDorsal}
                placeholder="Nombre del jugador"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Equipo</label>
              <div className="d-flex gap-3">
              <input
                type="text"
                className="form-control"
                id="nombreEquipo"
                value={equipo}
                onChange={changeEquipo}
                placeholder="Nombre del equipo"
                required
              />
              </div>
            </div>
            <div className="d-grid mt-2 gap-2">
              <button className="btn btn-primary" type="submit">
                Agregar
              </button>
              <button
                className="btn btn-dark"
                type="button"
                onClick={() => {
                  setNombre("");
                  setEquipo("");
                  setDorsal("");
                }}
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>

        <div className="col-sm-12 col-md-8 col-lg-4 col-xl-8">
          <h2>Listado de Jugadores</h2>
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Jugador</th>
                <th>Equipo</th>
                <th>Dorsal</th>
              </tr>
            </thead>
            <tbody>
              {jugadores.map((jugador) => (
                <tr key={jugador.id}>
                  <td>{jugador.id}</td>
                  <td>{jugador.nombre}</td>
                  <td>{jugador.equipo}</td>
                  <td>{jugador.dorsal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

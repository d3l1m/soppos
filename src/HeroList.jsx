import React, { useState } from 'react';

const HeroList = ({ heroes }) => {
  const [selectedHero, setSelectedHero] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (hero) => {
    setSelectedHero(hero);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedHero(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Relaciones Personales</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((hero) => (
            <tr key={hero.id}>
              <td>{hero.id}</td>
              <td>{hero.nombre}</td>
              <td>
                <button onClick={() => openModal(hero)}>
                  Ver Relaciones
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedHero && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Relaciones de {selectedHero.nombre}</h2>
            <ul>
              {selectedHero.relacionesPersonales.map((id) => (
                <li key={id}>
                  {/* Render hero details based on ID */}
                  {/* You can fetch details from the 'heroes' array */}
                  {heroes.find((hero) => hero.id === id)?.nombre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroList;
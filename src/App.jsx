import React, { useState } from 'react';
import UserTable from './UserTable';
import { Modal } from './Modal';
import { Heroes, Villanos, Patrocinadores, Horarios, Luchas } from './data';
import LuchasTable from './LuchasTable';
import logo from '../src/img/logo.jpg'
const App = () => {
  const [selectedUserType, setSelectedUserType] = useState('Heroes');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedDataType, setSelectedDataType] = useState('');
  const [selectedHeroRelations, setSelectedHeroRelations] = useState([]);
  const [selectedHeroSponsors, setSelectedHeroSponsors] = useState([]);
  const [selectedHeroSchedules, setSelectedHeroSchedules] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('nombre'); // Added state for the selected filter
  const handleShowModal = (dataType, data) => {
    setSelectedData(data);
    setSelectedDataType(dataType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUserClick = (userType) => {
    setSelectedUserType(userType);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };
  const handleShowSchedules = (schedule) => {
    const filteredSchedules = Horarios.filter((user) =>
      user.id === schedule
    );
    setSelectedHeroSchedules(filteredSchedules);
    handleShowModal('Horarios', filteredSchedules);
  };

  const handleShowRelations = (relations) => {
    console.log(relations)
    console.log(Heroes.map((heroe) => heroe.nombre))
    let filteredUsers = Heroes.filter((heroe) => relations.some((relation) => heroe.nombre === relation));
    setSelectedHeroRelations(filteredUsers);
    handleShowModal('Heroes', filteredUsers);
  };

  const handleShowSponsors = (heroId) => {
    const filteredSponsors = Patrocinadores.filter(
      (user) => user.heroeId === heroId
    );
    setSelectedHeroSponsors(filteredSponsors);
    handleShowModal('Patrocinadores', filteredSponsors);
  };

  return (
    <div className="bg-gray-500 min-h-screen flex flex-row">
  <div className="flex flex-col items-center bg-gray-800 text-white p-4 w-1/5">
  <img className="w-full rounded-full mb-4" src={logo} alt="Logo" />
  <h2 className="text-2xl mb-4">Guardians of the Globe</h2>
  <ul>
    <li>
      <button
        className={`block shadow-md text-gray-300 hover:text-white focus:outline-none font-semibold ${
          selectedUserType === 'Heroes' ? 'bg-red-500' : ''
        } rounded-xl py-3 px-6 my-2`}
        onClick={() => handleUserClick('Heroes')}
      >
        Heroes
      </button>
    </li>
    <li>
      <button
        className={`block shadow-md text-gray-300 hover:text-white focus:outline-none font-semibold ${
          selectedUserType === 'Villains' ? 'bg-red-500' : ''
        } rounded-xl py-3 px-6 my-2`}
        onClick={() => handleUserClick('Villains')}
      >
        Villains
      </button>
    </li>
    <li>
      <button
        className={`block shadow-md text-gray-300 hover:text-white focus:outline-none font-semibold ${
          selectedUserType === 'Luchas' ? 'bg-red-500' : ''
        } rounded-xl py-3 px-6 my-2`}
        onClick={() => handleUserClick('Luchas')}
      >
        Luchas
      </button>
    </li>
  </ul>
</div>



      {selectedUserType !== 'Luchas' && (
        <UserTable
          users={
            selectedUserType === 'Heroes'
              ? Heroes
              : selectedUserType === 'Villains'
              ? Villanos
              : null
          }
          userType={selectedUserType}
          onShowSponsors={handleShowSponsors}
          onShowRelations={handleShowRelations}
          onShowSchedules={handleShowSchedules}
          selectedFilter={selectedFilter}
          handleFilterChange={handleFilterChange}
          selectedHeroSponsors={selectedHeroSponsors}
        />
      )}
      {selectedUserType === 'Luchas' && <LuchasTable luchas={Luchas} />}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={selectedData}
        dataType={selectedDataType}
      />
    </div>
  );
};

export default App;



import React, { useState } from 'react';
import {Heroes} from './data';
const UserTable = ({handleFilterChange, selectedFilter, users, userType, onShowRelations, onShowSponsors, selectedHeroSponsors, onShowSchedules }) => {
  const [searchText, setSearchText] = useState('');
  const [searchOrigen, setSearchOrigen] = useState('');
  const [searchRelaciones, setSearchRelaciones] = useState('');
  const [searchDebilidades, setSearchDebilidades] = useState('');
  const [searchHabilidades, setSearchHabilidades] = useState('');
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchR = (event) => {
    setSearchRelaciones(Heroes.find((heroe) => heroe.id === event.target.value));
  };
  const handleSearchH = (event) => {
    setSearchHabilidades(event.target.value)
  }
  const handleSearchD= (event) => {
    setSearchDebilidades(event.target.value);
  };
  const handleSearchO = (event) => {
    setSearchOrigen(event.target.value);
  };
  const filteredUsers = users.filter((user) =>
  userType === 'Villains' &&
  user.nombre.toLowerCase().includes(searchText.toLowerCase()) &&
  user.origen.toLowerCase().includes(searchOrigen.toLowerCase()) &&
  user.debilidades.toLowerCase().includes(searchDebilidades.toLowerCase())|| 
  userType==='Heroes' && user.nombre.toLowerCase().includes(searchText.toLowerCase())
);



  return (
    <div className="h-full container mx-auto p-4">
     
      <div className="p-4">
      <label htmlFor="searchName" className="block text-sm font-medium text-gray-700">
          Buscar por nombre
        </label>
      <input
      type="text"
      className="border-2 border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
      placeholder="Search..."
      value={searchText}
      onChange={handleSearch}
    />
     {userType === 'Villains'&&(  <><label htmlFor="searchDebilidades" className="block text-sm font-medium text-gray-700">
          Buscar por debilidad
        </label>
          <input
      type="text"
      className="border-2 border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
      placeholder="Search..."
      value={searchDebilidades}
      onChange={handleSearchD}
    />
    <label htmlFor="searchOrigen" className="block text-sm font-medium text-gray-700">
          Buscar por origen
        </label>
          <input
      type="text"
      className="border-2 border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
      placeholder="Search..."
      value={searchOrigen}
      onChange={handleSearchO}
    />
     </> )}
    {userType === 'Heroes'&&(
<>
<label htmlFor="searchHabilidades" className="block text-sm font-medium text-gray-700">
          Buscar por debilidad
        </label>
          <input
      type="text"
      className="border-2 border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
      placeholder="Search..."
      value={searchHabilidades}
      onChange={handleSearchH}
    />
    <label htmlFor="searchOrigen" className="block text-sm font-medium text-gray-700">
          Buscar por relaciones personales
        </label>
          <input
      type="text"
      className="border-2 border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
      placeholder="Search..."
      value={searchRelaciones}
      onChange={handleSearchR}
    />
</>
    )}
      </div>
      {userType = ('Heroes' || 'Villanos') &&
      <table className="min-w-full bg-white rounded-2xl">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Fecha de Nacimiento</th>
            <th className="py-2 px-4 border-b">Habilidades</th>
            <th className="py-2 px-4 border-b">Origen</th>
            <th className="py-2 px-4 border-b">Debilidades</th>
            {userType === 'Heroes' && (
              <>
                <th className="py-2 px-4 border-b">Patrocinadores</th>
                <th className="py-2 px-4 border-b">Relaciones Personales</th>
                <th className="py-2 px-4 border-b">Horarios</th>
              
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.nombre}</td>
              <td className="py-2 px-4 border-b">{user.fechaNacimiento}</td>
              <td className="py-2 px-4 border-b">{user.habilidades}</td>
              <td className="py-2 px-4 border-b">{user.origen}</td>
              <td className="py-2 px-4 border-b">{user.debilidades}</td>
              {userType === 'Heroes' && (
                <>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="text-blue-500 hover:underline focus:outline-none"
                      onClick={() => onShowSponsors(user.id)}
                    >
                      Ver Patrocinadores
                    </button>
                  </td>
                  <td className="py-2 px-4 border-b">
  <button
    className="text-blue-500 hover:underline focus:outline-none"
    onClick={() => onShowRelations(user.relacionesPersonales)}
  >
    Ver Relaciones
  </button>
</td>
<td className="py-2 px-4 border-b">
  <button
    className="text-blue-500 hover:underline focus:outline-none"
    onClick={() => onShowSchedules(user.id)}
  >
    Ver Horarios
  </button>
</td>

                  
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>}
      
    </div>
    
  );
};

export default UserTable;

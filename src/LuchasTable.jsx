import React from 'react';

const LuchasTable = ({ luchas }) => {
  return (
    <div className="container min-h-screen mx-auto  p-4">
      <table className="rounded-2xl min-w-full bg-white border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Heroes</th>
            <th className="py-2 px-4 border-b">Villanos</th>
            <th className="py-2 px-4 border-b">Resultado</th>
          </tr>
        </thead>
        <tbody>
          {luchas.map((lucha) => (
            <tr key={lucha.id}>
              <td className="py-2 px-4 border-b">{lucha.id}</td>
              <td className="py-2 px-4 border-b">{lucha.heroes.join(', ')}</td>
              <td className="py-2 px-4 border-b">{lucha.villanos.join(', ')}</td>
              <td className="py-2 px-4 border-b">{lucha.resultado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LuchasTable;
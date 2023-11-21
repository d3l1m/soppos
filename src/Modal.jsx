// Modal component
// Modal component
export const Modal = ({ isOpen, onClose, data, dataType }) => {

    return (
      <div className={`fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 ${isOpen ? '' : 'hidden'}`}>
        <div className="bg-white rounded-2xl p-8 max-w-2xl w-full">
          <h2 className="text-lg font-semibold mb-4">{`Detalles de ${dataType}`}</h2>
          {/* Render data based on dataType */}
          {dataType === "Patrocinadores" && (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nombre</th>
                <th className="py-2 px-4 border-b">Monto</th>
                <th className="py-2 px-4 border-b">Fuente de Dinero</th>
              </tr>
            </thead>
            <tbody>
 {data.map((item) => (
  <tr key={item.id}>
    <td className="py-2 px-4 border-b">{item.id}</td>
    <td className="py-2 px-4 border-b">{item.nombre}</td> {/* Access the correct property */}
    <td className="py-2 px-4 border-b">{item.monto}</td>
    <td className="py-2 px-4 border-b">{item.fuenteDinero}</td>
  </tr>
))}
            </tbody>
          </table>
        )}
          {dataType === 'Heroes' && (
 <table className=" bg-white border border-gray-300">
 <thead>
   <tr>
     <th className="py-2 px-4 border-b">ID</th>
     <th className="py-2 px-4 border-b">Nombre</th>
     <th className="py-2 px-4 border-b">Fecha de Nacimiento</th>
     <th className="py-2 px-4 border-b">Habilidades</th>
     <th className="py-2 px-4 border-b">Origen</th>
     <th className="py-2 px-4 border-b">Debilidades</th>
   </tr>
 </thead>
 <tbody>
   {data.map((user) => (
     <tr key={user.id}>
       
       <td className="py-2 px-4 border-b">{user.id}</td>
       <td className="py-2 px-4 border-b">{user.nombre}</td>
       <td className="py-2 px-4 border-b">{user.fechaNacimiento}</td>
       <td className="py-2 px-4 border-b">{user.habilidades}</td>
       <td className="py-2 px-4 border-b">{user.origen}</td>
       <td className="py-2 px-4 border-b">{user.debilidades}</td>
     </tr>
   ))}
 </tbody>
</table>
          )}
          {dataType === 'Horarios' && (
                       <table className="min-w-full bg-white border border-gray-300">
                       <thead>
                         <tr>
                           <th className="py-2 px-4 border-b">ID</th>
                           <th className="py-2 px-4 border-b">Nombre</th>
                           <th className="py-2 px-4 border-b">Dias Activos</th>
                           <th className="py-2 px-4 border-b">Horas</th>
                         </tr>
                       </thead>
                       <tbody>
                         {data.map((item) => (
                           <tr key={item.id}>
                             <td className="py-2 px-4 border-b">{item.id}</td>
                             <td className="py-2 px-4 border-b">{item.nombre}</td>
                             <td className="py-2 px-4 border-b">{item.diasActivos}</td>
                             <td className="py-2 px-4 border-b">{item.horasActivas}</td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
          )}
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };
  
// components/SearchComponent.js
import React, { useState } from 'react';
import { Search } from 'react-feather';

const SearchComponent = ({ data, setFilteredData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Filtrar los datos basados en el término de búsqueda
    const filteredData = data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm)
      )
    );

    // Actualizar el estado de los datos filtrados
    setFilteredData(filteredData);

    // Actualizar el estado del término de búsqueda
    setSearchTerm(searchTerm);
  };

  return (
    <div className="mb-4 lg:w-1/2 m:w-full sm:w-full relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="pl-8 pr-2 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Buscar"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2 flex items-center pointer-events-none">
        <Search size={20} />
      </div>
    </div>
  );
};

export default SearchComponent;

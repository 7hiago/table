import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import './App.css';
import { Table } from './Table/Table';
import { Search } from './Search/Search';
import { Context } from './Context/Context';

function filterData(inputData, searchTerm) {
  return inputData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

function App() {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(filterData(data, search));
  }, [search]);

  return (
    <>
      <Context.Provider value={[search, setSearch]}>
        <Search />
      </Context.Provider>
      <Table
        data={filteredData}
      />
    </>
  );
}

export default App;

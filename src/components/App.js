import React, { useState } from 'react';
import data from '../data/data.json'
import './App.css';
import { Table } from './Table/Table.js';
import { Search } from './Search/Search.js';
import { Context } from './Context/Context.js'

function App() {
    const [ search, setSearch ] = useState('');

    function filterData(data, search) {
        return data.filter(data => data.name.toLowerCase().includes(search.toLowerCase()));
    }

    const filteredData = filterData(data, search);

    return (
        <Context.Provider value={[ search, setSearch ]} >
            <Search />
            <Table 
                data={filteredData} 
            />
        </Context.Provider >
    );
    
}

export default App;
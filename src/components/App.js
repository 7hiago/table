import React, { useState, useEffect } from 'react';
import data from '../data/data.json'
import './App.css';
import { Table } from './Table/Table.js';
import { Search } from './Search/Search.js';
import { Context } from './Context/Context.js'

function App() {
    const [ search, setSearch ] = useState('');
    const [ filteredData, setFilteredData] = useState(data);

    function filterData(data, search) {
        return data.filter(data => data.name.toLowerCase().includes(search.toLowerCase()));
    }
    useEffect(() => {
        setFilteredData(filterData(data, search));
    }, [search]);

    return (
        <>
            <Context.Provider value={[ search, setSearch ]} >
                <Search />
            </Context.Provider >
            <Table 
                data={filteredData} 
            />
        </>
    );
    
}

export default App;
import data from '../data/data.json'
import './App.css';

function App() {
    const arr = data;

    const listItems = arr.map((val, index) =>
        <tr key={index}>
            <td className="numCol">{index + 1}</td>
            <td className="idCol">{val.id} </td>
            <td className="nameCol">{val.name} </td>
            <td className="locationCol">{val.location} </td>
            <td className="currencyCol">{val.currency} </td>
        </tr>
    );
    return <table>
        <thead>
            <tr>
                <th className="numCol" scope="col">#</th>
                <th className="idCol" scope="col">ID</th>
                <th className="nameCol" scope="col">Name</th>
                <th className="locationCol" scope="col">Location</th>
                <th className="currencyCol" scope="col">Currency</th>
            </tr>
        </thead>
        <tbody>
            {listItems}
        </tbody>
    </table>;
}

export default App;
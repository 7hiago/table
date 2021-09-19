import React from 'react';
import './Table.css';

export const Table = ({ data }) => {
  const listItems = data.map((item, index) => (
    <tr key={item.id}>
      <td className="numCol">{index + 1}</td>
      <td className="idCol">
        {item.id}
        {' '}
      </td>
      <td className="nameCol">
        {item.name}
        {' '}
      </td>
      <td className="locationCol">
        {item.location}
        {' '}
      </td>
      <td className="currencyCol">
        {item.currency}
        {' '}
      </td>
    </tr>
  ));
  return (
    <table>
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
    </table>
  );
};

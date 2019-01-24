import React from 'react';

let Table = ({ headers, data = {}, loading = true }) => {
  let emptyTable = (obj) => Object.entries(obj).length === 0 && obj.constructor === Object;

  let TableHead = () => {
    return (
      <thead>
        <tr>
         { headers.map(header => <th key={header}>{header}</th>) }
        </tr>
      </thead>
    )
  };

  let TableBody = () => {
    return (
      <tbody>
        {!loading && emptyTable(data) &&
          <tr><td colSpan={headers.length}>There is no data available</td></tr>
        }

        {loading && !emptyTable(data) &&
          <tr><td colSpan={headers.length}>Loading...</td></tr>
        }

        {!loading && !emptyTable(data) && data.map(row => {
            return (
              <tr key={row.id}>
                <th scope="row" className="align-middle">{row.id}</th>
                <td className="align-middle">{row.name}</td>
                <td className="align-middle">{row.updated_at}</td>
                <td className="align-middle">{row.action}</td>
              </tr>
            );
          })
        }
      </tbody>
    )
  };

  return (
      <table className="table table-striped table-hover card-text">
        <TableHead />
        <TableBody />
      </table>
  );
}

export { Table }

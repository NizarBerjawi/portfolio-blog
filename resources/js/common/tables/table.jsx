import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ headers, data = {}, loading = true }) => {
  const emptyTable = obj => Object.entries(obj).length === 0 && obj.constructor === Object;

  const TableHead = () => (
    <thead>
      <tr>
        { headers.map(header => <th key={header}>{header}</th>) }
      </tr>
    </thead>
  );

  const TableBody = () => (
    <tbody>
      {!loading && emptyTable(data)
        && <tr><td colSpan={headers.length}>There is no data available</td></tr>
      }

      {loading && !emptyTable(data)
        && <tr><td colSpan={headers.length}>Loading...</td></tr>
      }

      {!loading && !emptyTable(data)
        && data.map(row => (
          <tr key={row.id}>
            <th scope="row" className="align-middle">{row.id}</th>
            <td className="align-middle">{row.name}</td>
            <td className="align-middle">{row.updated_at}</td>
            <td className="align-middle">{row.action}</td>
          </tr>
        ))
      }
    </tbody>
  );

  return (
    <table className="table table-striped table-hover card-text">
      <TableHead />
      <TableBody />
    </table>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
};

Table.defaultProps = {
  headers: [],
};

export default Table;

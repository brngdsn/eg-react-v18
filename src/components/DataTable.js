import React, { useState, useMemo } from 'react';
import './DataTable.css'

// Check sort order
const sortAscending = (sortConfig, key) => {
  return sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending';
};

// DataTable component
const DataTable = ({ data, columns, rowsPerPage }) => {

  // State
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Memoized sorted data
  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  // Sort set handler
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortAscending(sortConfig, key)) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Pagination
  const startIndex = currentPage * rowsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  // Page set handler
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination Component
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const Pagination = () => (
    <div>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => changePage(index)}
          disabled={index === currentPage}>
            {index + 1}
        </button>
      ))}
    </div>
  );

  // View
  return (
    <>
      <table className="DataTable">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} onClick={() => requestSort(column.key)}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.key}>{item[column.key]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination />
    </>
  );

};

// Export component
export default DataTable;
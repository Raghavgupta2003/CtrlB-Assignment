import { useState } from 'react';

function TablePanel({ data, setData }) {
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [editRowData, setEditRowData] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);

  //fxn to sort column by clicking column headers
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  //getting sorted data
  const getProcessedData = () => {
    let filtered = data.filter((row) =>
      Object.values(row).some((val) =>
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    if (sortConfig.key !== null) {
      filtered.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  };

  const sortedData = getProcessedData();

  //Editing a Row
  const handleEditClick = (index) => {
    setEditRowIndex(index);
    setEditRowData({ ...sortedData[index] });
  };
  //Canceling to edit
  const handleCancel = () => {
    setEditRowIndex(null);
    setEditRowData({});
  };
  //Save our edits
  const handleSave = () => {
    const originalIndex = data.findIndex(
      (item) => JSON.stringify(item) === JSON.stringify(sortedData[editRowIndex])
    );
    const updated = [...data];
    updated[originalIndex] = editRowData;
    setData(updated);
    setEditRowIndex(null);
  };
  //Input changes during edit
  const handleChange = (e, key) => {
    setEditRowData({
      ...editRowData,
      [key]: e.target.value,
    });
  };
  //deleting a single row
  const handleDelete = (index) => {
    const itemToDelete = sortedData[index];
    const updated = data.filter((item) => item !== itemToDelete);
    setData(updated);
  };
  //Adding a new row and enter edit mode
  const handleAddRow = () => {
    const keys = Object.keys(data[0] || {});
    const newRow = keys.reduce((obj, key) => ({ ...obj, [key]: '' }), {});
    setData([...data, newRow]);
    setEditRowIndex(data.length); // new row is the last one
    setEditRowData(newRow);
  };
  //select or deselect a single row
  const handleSelectRow = (index) => {
    const originalIndex = data.findIndex(
      (item) => JSON.stringify(item) === JSON.stringify(sortedData[index])
    );
    if (selectedRows.includes(originalIndex)) {
      setSelectedRows(selectedRows.filter((i) => i !== originalIndex));
    } else {
      setSelectedRows([...selectedRows, originalIndex]);
    }
  };
  //selecting or deselecting all rows
  const handleSelectAll = () => {
    const allIndices = sortedData.map((row) =>
      data.findIndex((item) => JSON.stringify(item) === JSON.stringify(row))
    );
    const allSelected = allIndices.every((i) => selectedRows.includes(i));
    setSelectedRows(allSelected ? [] : [...new Set([...selectedRows, ...allIndices])]);
  };
  //deleting all selected rows
  const handleBatchDelete = () => {
    const updated = data.filter((_, index) => !selectedRows.includes(index));
    setData(updated);
    setSelectedRows([]);
  };

  return (
    <div>
      <h2>📋 Table Panel</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={handleAddRow}>➕ Add Row</button>
        {selectedRows.length > 0 && (
          <button onClick={handleBatchDelete} style={{ marginLeft: '10px' }}>
            🗑️ Delete Selected ({selectedRows.length})
          </button>
        )}
      </div>
    
       <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '1rem' }}>      <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={
                  sortedData.length > 0 &&
                  sortedData.every((row) =>
                    selectedRows.includes(data.findIndex((item) => JSON.stringify(item) === JSON.stringify(row)))
                  )
                }
              />
            </th>
            {Object.keys(data[0] || {}).map((key) => (
            <th key={key} onClick={() => handleSort(key)} style={{ cursor: 'pointer' }}>
                {key}
                <span>
                    {sortConfig.key === key
                    ? sortConfig.direction === 'asc'
                        ? ' 🔼'
                        : ' 🔽'
                    : ' ⇅'}
                </span>
            </th>

            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => {
            const originalIndex = data.findIndex(
              (item) => JSON.stringify(item) === JSON.stringify(row)
            );
            return (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(originalIndex)}
                    onChange={() => handleSelectRow(index)}
                  />
                </td>
                {Object.keys(row).map((key) => (
                  <td key={key}>
                    {editRowIndex === index ? (
                      <input
                        value={editRowData[key]}
                        onChange={(e) => handleChange(e, key)}
                      />
                    ) : (
                      row[key]
                    )}
                  </td>
                ))}
                <td>
                  {editRowIndex === index ? (
                    <>
                      <button onClick={handleSave}>💾 Save</button>
                      <button onClick={handleCancel}>❌ Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditClick(index)}>✏️ Edit</button>
                      <button onClick={() => handleDelete(index)}>🗑️ Delete</button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TablePanel;

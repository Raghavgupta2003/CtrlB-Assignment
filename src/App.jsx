import { useState } from 'react';
import ChartPanel from './components/ChartPanel';
import TablePanel from './components/TablePanel';
import { generateMockData } from './data/mockData';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState(generateMockData());

  return (
    // <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
    //   <h1>📊 CtrlB Dashboard</h1>
    //   <ChartPanel data={data} />
    //   <TablePanel data={data} setData={setData} />
    // </div>

    //----------Adding Dark and light theme feauture--------------
    <div className={darkMode ? "dark-mode" : ""} style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <div className="toggle-container">
        <span>{darkMode ? "🌙" : "🌞"}</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <h1>📊 CtrlB - Frontend Intern
Assignment</h1>
      <ChartPanel data={data} />
      <TablePanel data={data} setData={setData} />
    </div>
  );
}

export default App;

// import { useState } from 'react';
// import { Bar, Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement);

// const ChartPanel = ({ data }) => {
//   const [type, setType] = useState('bar');

//   const labels = data.map(item => item.name);
//   const values = data.map(item => item.value);

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: 'Sample Data',
//         data: values,
//         backgroundColor: '#4e79a7',
//         borderColor: '#4e79a7',
//         borderWidth: 2,
//         fill: false,
//       },
//     ],
//   };

//   return (
//     <div style={{ marginBottom: '2rem' }}>
//       <h2>Chart Panel</h2>
//       <button onClick={() => setType('bar')}>Bar</button>
//       <button onClick={() => setType('line')}>Line</button>
//       <div style={{ height: '300px', marginTop: '1rem' }}>
//         {type === 'bar' ? <Bar data={chartData} /> : <Line data={chartData} />}
//       </div>
//     </div>
//   );
// };

// export default ChartPanel;


//-----------Scalable---------------

import { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend);

const ChartPanel = ({ data }) => {
  const [type, setType] = useState('bar');
  const [filter, setFilter] = useState('top5');

  // Sort by value descending
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  // Filter logic
  let filteredData;
  if (filter === 'top5') {
    filteredData = sortedData.slice(0, 5);
  } else if (filter === 'top10') {
    filteredData = sortedData.slice(0, 10);
  } else {
    filteredData = sortedData;
    // filteredData = data;
  }

  const labels = filteredData.map(item => item.name);
  const values = filteredData.map(item => item.value);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Sample Data',
        data: values,
        backgroundColor: '#4e79a7',
        borderColor: '#4e79a7',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>📊 Chart Panel</h2>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div>
          <label>Chart Type: </label>
          <button onClick={() => setType('bar')}>Bar</button>
          <button onClick={() => setType('line')}>Line</button>
        </div>

        <div>
          <label>Show: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="top5">Top 5</option>
            <option value="top10">Top 10</option>
            <option value="all">All</option>
          </select>
        </div>
      </div>

      <div style={{ height: '400px', marginTop: '1rem' }}>
        {type === 'bar' ? <Bar data={chartData} options={{ responsive: true }} /> : <Line data={chartData} options={{ responsive: true }} />}
      </div>
    </div>
  );
};

export default ChartPanel;




import React, { useEffect, useState } from 'react';
import { fetchDevActivity } from '../services/api';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';
import Navbar from '../components/Navbar';

interface Activity {
  time: string;
  commits: number;
  pullRequests: number;
  merges: number;
  meetings: number;
  documentation: number;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Activity[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      try {
        const activityData = await fetchDevActivity();
        setData(activityData);
      } catch (err) {
        setError('Failed to fetch data');
      }
    };

    getData();
  }, []);

  const filteredData = data.filter((activity) => {
    if (!startDate && !endDate) return true;
    const activityTime = new Date(activity.time).getTime();
    const start = startDate ? new Date(startDate).getTime() : -Infinity;
    const end = endDate ? new Date(endDate).getTime() : Infinity;
    return activityTime >= start && activityTime <= end;
  });

  const summary = filteredData.reduce(
    (acc, cur) => {
      acc.commits += cur.commits;
      acc.pullRequests += cur.pullRequests;
      acc.merges += cur.merges;
      acc.meetings += cur.meetings;
      acc.documentation += cur.documentation;
      return acc;
    },
    { commits: 0, pullRequests: 0, merges: 0, meetings: 0, documentation: 0 }
  );

  if (error) {
    return <div>{error}</div>;
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <h1>Developer Activity Dashboard</h1>
        <div className="filters">
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </label>
          <label>
            End Date:
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </label>
          
        </div>
         <div>
        <h5>Please select dates from June 1, 2024, to June 8, 2024, to view the weekly Data Analytics</h5>
        </div>
        <div className="summary">
          <h2>Summary Statistics</h2>
          <table>
            <thead>
              <tr>
                <th>Commits</th>
                <th>Pull Requests</th>
                <th>Merges</th>
                <th>Meetings</th>
                <th>Documentation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{summary.commits}</td>
                <td>{summary.pullRequests}</td>
                <td>{summary.merges}</td>
                <td>{summary.meetings}</td>
                <td>{summary.documentation}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="chart-container">
          <LineChart width={800} height={400} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="commits" stroke="#8884d8" />
            <Line type="monotone" dataKey="pullRequests" stroke="#82ca9d" />
            <Line type="monotone" dataKey="merges" stroke="#ffc658" />
            <Line type="monotone" dataKey="meetings" stroke="#ff7300" />
            <Line type="monotone" dataKey="documentation" stroke="#0088FE" />
          </LineChart>
          <div className="additional-charts">
            <div className="bar-chart">
              <h3>Activity Bar Chart</h3>
              <BarChart width={400} height={300} data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="commits" fill="#8884d8" />
                <Bar dataKey="pullRequests" fill="#82ca9d" />
                <Bar dataKey="merges" fill="#ffc658" />
                <Bar dataKey="meetings" fill="#ff7300" />
                <Bar dataKey="documentation" fill="#0088FE" />
              </BarChart>
            </div>
            <div className="pie-chart">
              <h3>Activity Pie Chart</h3>
              <PieChart width={400} height={300}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={[
                    { name: 'Commits', value: summary.commits },
                    { name: 'Pull Requests', value: summary.pullRequests },
                    { name: 'Merges', value: summary.merges },
                    { name: 'Meetings', value: summary.meetings },
                    { name: 'Documentation', value: summary.documentation },
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {filteredData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

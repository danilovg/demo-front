import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [reports, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/statement')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {reports.map(report => (
          <li key={report.id}>{report.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
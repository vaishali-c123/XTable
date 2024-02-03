import "./styles.css";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const data2 = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  useEffect(() => {
    setData(data2);
  }, []);

  const sortByDate = () => {
    data2.sort((a, b) => new Date(b.date) - new Date(a.date));
    setData(data2);
  };

  const sortByViews = () => {
    data2.sort((a, b) => b.views - a.views);
    setData(data2);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

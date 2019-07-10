import React, { useState, useEffect } from "react";

const LogItemList = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();

    console.log(data);

    setLogs(data);
    setLoading(false);
  };

  return loading ? (
    <h4>Loading...</h4>
  ) : (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show</p>
      ) : (
        logs.map(log => <li>{log.message}</li>)
      )}
    </ul>
  );
};

export default LogItemList;

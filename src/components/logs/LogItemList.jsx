import React, { useState, useEffect } from "react";
import Loader from "../layout/Loader";
import LogItem from "./LogItem";

const LogItemList = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function() {
      getLogs();
    }, 1000);
  }, []);

  const getLogs = async () => {
    const res = await fetch("/logs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

export default LogItemList;

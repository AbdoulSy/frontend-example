require("@babel/polyfill");
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export const apiCall = async setSeconds => {
  const response = await fetch("https://localhost:3001/api");
  const myJson = await response.json();

  console.log(JSON.stringify(myJson));
  if (myJson.success) {
    setSeconds(myJson.value);
  }
};

export const intervalCall = (requests, setRequests) => {
  setTimeout(() => {
    setRequests(requests + 1);
  }, 3000);
};

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [requests, setRequests] = useState(0);

  useEffect(() => {
    apiCall(setSeconds);
  }, [requests]);

  useEffect(() => {
    intervalCall(requests, setRequests);
  });

  return <p>{seconds} elapsed</p>;
};

ReactDOM.render(<Timer />, document.getElementById("root"));

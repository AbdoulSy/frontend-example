import React, {useState, useEffect} from "react";
import apiCall from "../../helpers/ApiCall";
import intervalCall from "../../helpers/IntervalCall";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [requests, setRequests] = useState(0);

  useEffect(() => {
    apiCall(fetch)(setSeconds);
  }, [requests]);

  useEffect(() => {
    intervalCall(setTimeout)(requests, setRequests);
  });

  return <div data-testid="timer-title">
    <span data-testid="timer-time">{seconds}</span> elapsed
  </div>;
};

export default Timer;

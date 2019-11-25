import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import apiCall from "../../helpers/ApiCall";
import intervalCall from "../../helpers/IntervalCall";

export const Timer = ({ fetchUtil }) => {
  const [seconds, setSeconds] = useState(0);
  const [requests, setRequests] = useState(0);
  const remoteRequestFn = fetchUtil || apiCall;

  useEffect(() => {
    remoteRequestFn(setSeconds);
  }, [requests]);

  useEffect(() => {
    intervalCall(requests, setRequests);
  });

  return <div data-testid="timer-title">
    <span data-testid="timer-time">{seconds}</span> elapsed
  </div>;
};


Timer.propTypes = {
  fetchUtil: PropTypes.func
};

export default Timer;

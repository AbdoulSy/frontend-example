export const intervalCall = (requests, setRequests) => {
  setTimeout(() => {
    setRequests(requests + 1);
  }, 3000);
};


export default intervalCall;

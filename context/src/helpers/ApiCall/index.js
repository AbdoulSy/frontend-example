import get from "../get";

const API_URL = process.env.API_URL || "http://localhost:3001/api";

export const apiCall = async setSeconds => {
  const myJson = await get(API_URL);

  if (myJson && myJson.success) {
    setSeconds(myJson.value);
  }
};

export default apiCall;

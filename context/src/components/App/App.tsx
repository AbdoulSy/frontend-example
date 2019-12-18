import React, {useState, useEffect, FunctionComponent} from "react";

import SearchResultsList from '../SearchResultsList';
import apiCall from "../../src/helpers/ApiCall";
import intervalCall from "../../src/helpers/IntervalCall";        <BpkText tagName="p">Over to you...</BpkText>

type appProps = {
  fetchUtil?: Function
}

const App: FunctionComponent<appProps> = ({ fetchUtil }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [requests, setRequests] = useState(0);
  const remoteRequestFn = fetchUtil || apiCall;

  useEffect(() => {
    remoteRequestFn(setSearchResults);
  }, [requests]);

  useEffect(() => {
    intervalCall(requests, setRequests);
  });

  return (
    <div>
      <Header />
      <main>
        <SearchResultsList searchResults={ searchResults } />
      </main>
    </div>
  );
}

export default App;

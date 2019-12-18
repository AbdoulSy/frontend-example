import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import SearchResultsList from '../SearchResultsList';
import SearchFilter from '../SearchFilter';
import {
  StyledFilterArea
} from '../styled';

const App = ({ 
    fetchEarthquakesActionCreators,
    clearFilter,
    setEarthquakeMagnitudeNbFilter,
    setEarthquakeMagnitudeTypeFilter,
    searchResults,
    filters
 }) => {
  if (!searchResults.pending && searchResults.earthquakes.length === 0) {
    fetchEarthquakesActionCreators();
  }

  return (
    <div data-testid='app'>
      {searchResults.pending && <div>Loading...</div>}
      {!searchResults.pending && 
        <main data-testid='main'>
        <StyledFilterArea data-testid='search-filters'>
          <SearchFilter filter={filters.earthquakeMagnitudeType}
            onSelect={setEarthquakeMagnitudeTypeFilter}
            clearFilter={clearFilter} />
          <SearchFilter filter={filters.earthquakeMagnitudeNb}
            onSelect={setEarthquakeMagnitudeNbFilter}
            clearFilter={clearFilter} />
        </StyledFilterArea>
        <SearchResultsList searchResults={ searchResults } filters={filters} />
      </main>
      }
    </div>
  );
}

export default App;

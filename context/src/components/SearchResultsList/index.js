import React from 'react';
import PropTypes from 'prop-types';

import EarthquakeDetails from '../EarthquakeDetails';
import NotFound from '../NotFound';
import {
    StyledEarthQuakeDetails,
    StyledEarthQuakeDetailsRow
} from '../styled'

const SearchResultsList  = ({searchResults, filters }) => {
    const pendingClassName = searchResults && searchResults.pending ? 'pending' : '';
    const earthquakes = searchResults && searchResults.earthquakes;
    const {activeFilter} = filters;
    let earthquakeList;

    if(filters[activeFilter] && filters[activeFilter].active) {
        earthquakeList =  earthquakes && earthquakes.length && earthquakes.filter((elem) => {
            if(activeFilter === 'earthquakeMagnitudeType') {
                console.log('filterValue', filters[activeFilter].value)
                return elem.properties.magType === filters[activeFilter].value;
            } else {
                console.log('filterValue', filters[activeFilter].value, elem.properties.mag)

                return parseInt(elem.properties.mag, 10) === parseInt(filters[activeFilter].value, 10);

            }
        });
    } else {
        earthquakeList = earthquakes;
        console.log('NON FILTERED', earthquakeList, filters);

    }

    const allEarthquakes = earthquakeList && earthquakeList.length && earthquakeList.map(earthquake => {
        return <EarthquakeDetails { ...earthquake } />;
    });

    return <div>
        <StyledEarthQuakeDetails>
            <StyledEarthQuakeDetailsRow>
                <li>ID</li>
                <li>place</li>
                <li>mag type</li>
                <li>magnitude</li>
            </StyledEarthQuakeDetailsRow>
        </StyledEarthQuakeDetails>
        <div data-testid="search-result-list" className={pendingClassName}>
            {allEarthquakes}
        </div>
    </div>;
};

SearchResultsList.propTypes = {
    searchResults: PropTypes.shape({
        pending: PropTypes.bool.isRequired,
        filters: PropTypes.shape({
            earthquakeMagnitudeType: PropTypes.string.isRequired,
            earthquakeMagnitudeNb: PropTypes.number.isRequired
        }).isRequired
    })
};

export default SearchResultsList;
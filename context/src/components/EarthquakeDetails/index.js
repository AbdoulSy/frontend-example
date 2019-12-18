import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledEarthQuakeDetails,
    StyledEarthQuakeDetailsRow
} from '../styled'


const EarthquakeDetails = (earthquake) => {
    const { id, properties} = earthquake;
    const { place, mag, magType } = properties;

    return <StyledEarthQuakeDetails data-testid='earthquake-details' key={id}>
        <StyledEarthQuakeDetailsRow>
            <li data-testid='earthquake-id'>
                {id}
            </li>
            <li data-testid='earthquake-location'>
                {place}
            </li>
            <li data-testid='earthquake-magnitude-type'>
                {magType}
            </li>
            <li data-testid='earthquake-magnitude-nb'>
                {mag}
            </li>
        </StyledEarthQuakeDetailsRow>
    </StyledEarthQuakeDetails>
};

EarthquakeDetails.propTypes = {
    id: PropTypes.string.isRequired,
    properties: PropTypes.shape({
        place: PropTypes.string.isRequired,
        mag: PropTypes.number.isRequired,
        magType: PropTypes.string.isRequired
    })
};

export default EarthquakeDetails;


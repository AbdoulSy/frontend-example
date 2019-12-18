import App from './App';
import { connect } from 'react-redux';

import fetchEarthquakesActionCreators from '../../redux/actionCreators/fetchEarthquakesActionCreators';
import {
    setEarthquakeMagnitudeNbFilter,
    setEarthquakeMagnitudeTypeFilter,
    clearFilter
} from '../../redux/actionCreators/filterSearchResultsActionCreators';

const mapStateToProps = ({ searchResults, filters }) => {
    return {
        searchResults,
        filters
    };
};

const mapDispatchToProps = {
    clearFilter,
    fetchEarthquakesActionCreators,
    setEarthquakeMagnitudeNbFilter,
    setEarthquakeMagnitudeTypeFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

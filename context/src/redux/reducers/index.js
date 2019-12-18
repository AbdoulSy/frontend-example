import { combineReducers } from 'redux';

import filtersReducers from './filtersReducer';
import searchResultsReducer from './searchResultsReducer';

export default combineReducers({
    filters: filtersReducers,
    searchResults: searchResultsReducer
});
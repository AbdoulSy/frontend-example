import ApiCall from '../../../helpers/ApiCall';

import {
    FETCH_EARTHQUAKES,
    EARTHQUAKES_SEARCH_RESULTS_SUCCESS,
    EARTHQUAKE_SEARCH_RESULTS_FAILURE
} from '../../actionTypes';

export default (filterOptions) => async (dispatch) => {
    dispatch({
        type: FETCH_EARTHQUAKES,
        payload: filterOptions
    });
    const response = await ApiCall(filterOptions);

    if (response.success) {
        dispatch({
            type: EARTHQUAKES_SEARCH_RESULTS_SUCCESS,
            payload: response.data
        });
    } else {
        dispatch({
            type: EARTHQUAKE_SEARCH_RESULTS_FAILURE,
            payload: 'Something went wrong with the server, try again later'
        })
    }
}
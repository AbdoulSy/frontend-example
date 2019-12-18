import {
    CLEAR_FILTER,
    SET_EARTHQUAKE_MAGNITUDE_NB_FILTER,
    SET_EARTHQUAKE_MAGNITUDE_TYPE_FILTER
} from '../../actionTypes';

export const setEarthquakeMagnitudeNbFilter = (mag) => (dispatch) => {
    dispatch({
         type: SET_EARTHQUAKE_MAGNITUDE_NB_FILTER,
         payload: mag,
     });
};

export const setEarthquakeMagnitudeTypeFilter = (magType) => (dispatch) =>{
    dispatch({
        type: SET_EARTHQUAKE_MAGNITUDE_TYPE_FILTER,
        payload: magType
    })
};

export const clearFilter = () => {
    return {
        type: CLEAR_FILTER
    }
};
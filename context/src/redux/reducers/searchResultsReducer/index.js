import { produce } from 'immer';
import { 
    EARTHQUAKES_SEARCH_RESULTS_SUCCESS,
    EARTHQUAKE_SEARCH_RESULTS_FAILURE,
    FETCH_EARTHQUAKES,
    SET_EARTHQUAKE_MAGNITUDE_NB_FILTER,
    SET_EARTHQUAKE_MAGNITUDE_TYPE_FILTER
} from '../../actionTypes'

export default produce((draft, action) => {
    switch(action.type) {
        case FETCH_EARTHQUAKES: {
            draft.pending = true;
            draft.earthquakes = [];
            break;
        }
        case EARTHQUAKES_SEARCH_RESULTS_SUCCESS: {
            draft.earthquakes = action.payload.features;
            draft.pending = false;
            break;
        }
        case EARTHQUAKE_SEARCH_RESULTS_FAILURE: {
            draft.earthquakes = action.payload.features;
            draft.pending = false;
            break;
        }
        case SET_EARTHQUAKE_MAGNITUDE_TYPE_FILTER: {
            break;
        }
        case SET_EARTHQUAKE_MAGNITUDE_NB_FILTER: {
            break;
        }

        default: {
            return {
                pending: false,
                earthquakes: []
            };
        }
    }

    return draft;
})

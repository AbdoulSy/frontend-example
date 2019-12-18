import { produce } from 'immer';
import initialState from '../../store/initialState'
import {
    SET_EARTHQUAKE_MAGNITUDE_NB_FILTER,
    SET_EARTHQUAKE_MAGNITUDE_TYPE_FILTER
} from '../../actionTypes'

export default produce((draft, action) => {
    switch(action.type) {
        case SET_EARTHQUAKE_MAGNITUDE_TYPE_FILTER: {
            draft.earthquakeMagnitudeType.value = action.payload;
            draft.earthquakeMagnitudeType.active = true;
            draft.earthquakeMagnitudeNb.active = false;
            draft.activeFilter = 'earthquakeMagnitudeType';

            break;
        }
        case SET_EARTHQUAKE_MAGNITUDE_NB_FILTER: {
            draft.earthquakeMagnitudeNb.value = action.payload;
            draft.earthquakeMagnitudeNb.active = true;
            draft.earthquakeMagnitudeType.active = false;
            draft.activeFilter = 'earthquakeMagnitudeNb';

            break;
        }

        case 'CLEAR_FILTER':
        default: {
            return initialState.filters;
        }
    }

    return draft;
});

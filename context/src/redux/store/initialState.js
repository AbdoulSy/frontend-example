export default {
    searchResults: {
        pending: false,
        earthquakes: []
    },
    filters: {
        activeFilter: 'earthquakeMagnitudeType',
        earthquakeMagnitudeType:  {
            name: 'Magnitude type',
            value: '',
            active: false
        },
        earthquakeMagnitudeNb: {
            active: false,
            value: '',
            name: 'Magnitude Number'
        }
    }
};

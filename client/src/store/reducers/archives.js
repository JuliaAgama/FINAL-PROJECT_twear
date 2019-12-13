import * as ARCHIVES from '../constants/archives';

const initState = {
    archives: [],
    archivesFiltered: {},
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case ARCHIVES.ARCHIVES_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case ARCHIVES.ARCHIVES_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

        case ARCHIVES.ARCHIVES_GET_ALL_ARCHIVES:
            return {
                ...state,
                ...{
                    archives: action.data,
                    loaded: true
                }
            };

            case ARCHIVES.ARCHIVES_GET_ARCHIVES_BY_FILTER:
                return {
                    ...state,
                    ...{
                        archivesFiltered: action.data,
                        loaded: true
                    }
                };

        case ARCHIVES.ARCHIVES_GET_ARCHIVES_BY_SEARCH:
            return {
                ...state,
                ...{
                    archives: action.data,
                    loaded: true
                }
            };

            case ARCHIVES.ARCHIVES_GET_ARCHIVES_BY_PARENT_ID:
                return {
                    ...state,
                    ...{
                        archives: action.data,
                        loaded: true
                    }
                };

        case ARCHIVES.ARCHIVES_ADD_ARCHIVE:
            return {
                ...state,
                ...{
                    archives : [...state.archives, ...[action.data]],
                    loaded : true
                }
            };

            case ARCHIVES.ARCHIVES_UPDATE_ARCHIVE:
            let updatedArchives = state.archives.map(el => {
                if(el._id === action.data._id){
                    return action.data
                }
                return el;
            });
            return{
                ...state,
                ...{
                    archives : updatedArchives,
                    loaded : true
                }
            };

            case ARCHIVES.ARCHIVES_DELETE_ARCHIVE:
            let updated = state.archives.filter(el => {
                return el._id !== action.data._id
            });
            return {
                ...state,
                ...{
                    archives : updated,
                    loaded : true
                }
            };
        default:
            return state
    }
}

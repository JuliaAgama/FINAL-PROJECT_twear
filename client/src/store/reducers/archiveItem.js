import * as ARCHIVES from '../constants/archives';

const initState = {
    archiveItem: {},
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case ARCHIVES.ARCHIVE_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case ARCHIVES.ARCHIVE_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

            case ARCHIVES.ARCHIVE_GET_ARCHIVE_ITEM:
                return {
                    ...state,
                    ...{
                        archiveItem: action.data,
                        loaded: true
                    }
                };

            case ARCHIVES.ARCHIVE_GET_ARCHIVE_ITEM_BY_ITEMNO:
                return {
                    ...state,
                    ...{
                        archiveItem: action.data,
                        loaded: true
                    }
                };

        default:
            return state
    }
}

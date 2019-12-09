import * as ARCHIVES from '../constants/archives';
import ArchivesApi from '../../services/Archives';


export function archivesSendRequest() {
    return {
        type: ARCHIVES.ARCHIVES_SEND_REQUEST
    };
};

export function archiveItemSendRequest() {
    return {
        type: ARCHIVES.ARCHIVE_SEND_REQUEST
    };
};

export function getAllArchives() {
    return function (dispatch) {
        dispatch(archivesSendRequest());
        (new ArchivesApi()).getAllArchives().then(res => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_GET_ALL_ARCHIVES,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function getArchivesByFilter(filter) {
    return function (dispatch) {
        dispatch(archivesSendRequest());
        (new ArchivesApi()).getArchivesByFilter(filter).then(res => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_GET_ARCHIVES_BY_FILTER,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function getArchivesBySearch(searchValue) {
    return function (dispatch) {
        dispatch(archivesSendRequest());
        (new ArchivesApi()).getArchivesBySearch(searchValue).then(res => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_GET_ARCHIVES_BY_SEARCH,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function getArchivesByParentId(CategoryId) {
    return function (dispatch) {
        dispatch(archivesSendRequest());
        (new ArchivesApi()).getArchivesByMatch({Category: CategoryId}).then(res => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_GET_ARCHIVES_BY_PARENT_ID,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function getArchiveItem(id) {
    return function (dispatch) {
        dispatch(archiveItemSendRequest());
        (new ArchivesApi()).getArchiveById(id).then(res => {
            return dispatch({
                type: ARCHIVES.ARCHIVE_GET_ARCHIVE_ITEM,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: ARCHIVES.ARCHIVE_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function getArchiveItemByItemNo(itemNo) {
    return function (dispatch) {
        dispatch(archiveItemSendRequest());
        (new ArchivesApi()).getArchiveByItemNo(itemNo).then(res => {
            return dispatch({
                type: ARCHIVES.ARCHIVE_GET_ARCHIVE_ITEM_BY_ITEMNO,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: ARCHIVES.ARCHIVE_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function addArchive(item){
    return function (dispatch) {
        dispatch(archivesSendRequest());
        (new ArchivesApi()).addArchive(item).then(res => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_ADD_ARCHIVE,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};

export function updateArchive (item){
    return function (dispatch) {
        dispatch(archivesSendRequest());
        (new ArchivesApi()).updateArchive(item).then(res => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_UPDATE_ARCHIVE,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};

export function deleteArchive(item){
    return function (dispatch) {
        dispatch(archivesSendRequest());
        (new ArchivesApi()).deleteArchive(item).then(res => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_DELETE_ARCHIVE,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: ARCHIVES.ARCHIVES_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};

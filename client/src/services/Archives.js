import Base from './base';

export default class Archives extends Base {

    getAllArchives() {
        return super.get('archives/')
        .then(res => res.data)
    }

    getArchivesByFilter(filter) {
        return super.get(`archives/filter?`+filter)
        .then(res => res.data)
    }

    getArchivesBySearch(searchValue) {
        return super.post(`archives/search`, {query: searchValue})
        .then(res => res.data)
    }

    getArchivesByMatch(item) {
        return super.post(`archives/match`, item)
        .then(res => res.data)
    }

    getArchiveById(id) {
        return super.get('archives/' + id)
        .then(res => res.data)
    }

    getArchiveByItemNo(itemNo) {
        return super.get('archives/itemNo/' + itemNo)
        .then(res => res.data)
    }

    addArchive(archive) {
        return super.post(`archives`, archive)
        .then(res => res.data)
    }

    updateArchive(archive){
        return super.put(`archives/${archive._id}`, archive)
        .then(res => res.data)
    }

    deleteArchiveById(archive){
        return super.delete(`archives/${archive._id}`, archive)
        .then(res => res.data)
    }
};

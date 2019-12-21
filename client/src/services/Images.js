import Base from './base';

export default class Images extends Base {

    uploadImage(file, path) {

        const formData = new FormData();
        formData.append('file', file, file.name);

        return super.post(`images`, formData, {
            headers: {
                'path': `${path}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            return res.data.url;
        })
        .catch(err => {
            return err.response.data;
        })
    }

    deleteImage(path) {

        return super.delete(`images`, {data: {url: path}})
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
    }

};

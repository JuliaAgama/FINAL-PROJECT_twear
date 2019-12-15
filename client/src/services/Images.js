import Base from './base';

export default class Images extends Base {

    uploadImage(file) {

        const formData = new FormData();
        formData.append('file', file, file.name);

        return super.post(`images`, formData, {
            headers: {
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
};

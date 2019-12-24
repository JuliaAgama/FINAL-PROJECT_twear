import axios from 'axios';

export default class Base {

    static getToken(){
        return localStorage.getItem('token');
    }

    static setAuthToken(){
        const token = Base.getToken();
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    getUrl(path) {
        return `/api/${path}`;
    }

    get(url) {
        return axios
            .get(this.getUrl(url));
    }

    post(url, data, headers){
        return axios.post(this.getUrl(url), data, headers);
    }

    put(url, data, headers){
        return axios.put(this.getUrl(url), data, headers);
    }

    delete(url, data){
        return axios.delete(this.getUrl(url), data);
    }
};

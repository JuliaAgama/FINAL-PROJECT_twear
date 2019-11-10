import axios from 'axios';

export default class Base {
    constructor() {
        this.url = 'http://localhost:5000'; // localhost
        //    this.url = 'https://https://twear.herokuapp.com/api'; // heroku
    }

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
        return `${this.url}/${path}`;
    }

    get(url) {
        Base.setAuthToken();
        return axios
            .get(this.getUrl(url));
    }

    post(url, data){
        Base.setAuthToken();
        return axios.post(this.getUrl(url), data);
    }

    put(url, data){
        Base.setAuthToken();
        return axios.put(this.getUrl(url), data);
    }

    delete(url){
        Base.setAuthToken();
        return axios.delete(this.getUrl(url));
    }
}

import Base from './base';

export default class AuthAdmin extends Base{
    postAuth(data){
        // return super.post('admin/authenticate', data)
        //     .then(res => {
        //         sessionStorage.setItem('token', res.data);
        window.location.replace('/admin');
        //         window.location.href('/admi/n');
            // })
            // // .catch(err => err.response.data);
    }

    getUserInfo(){
        return JSON.parse(sessionStorage.getItem('token'));
    }

    getAuthHeader() {
        return {headers: {'x-access-token': this.getUserInfo() }};
    }

    logOut() {
        sessionStorage.removeItem('token');
    }
};

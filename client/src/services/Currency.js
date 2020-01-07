import axios from 'axios';

export default class Currency {

    getCurrency() {
        return axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
            .then(res => res.data)
    }
};
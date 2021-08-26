import axios from 'axios'
import authHeader from './auth.header';
import baseUrl from '../../config/baserUrl';

class ApiService{
    
    post(path, data, re) {
        return axios.post(`${baseUrl()}/${path}`, data, { headers: authHeader()})
    };

    update(path, data) {
        return axios.put(`${baseUrl()}/${path}`, data,  { headers: authHeader()})
    };

    delete(path) {
        return axios.delete(`${baseUrl()}/${path}`, { headers: authHeader()})
    };

    get(path) {
        return axios.get(`${baseUrl()}/${path}`, { headers: authHeader()})
    }

}

export default new ApiService();

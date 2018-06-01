import axios from 'axios';

let base = '';

export const requestTableList = params => { return axios.post(`${base}/ms/table/list`, params).then(res => res.data); }

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };
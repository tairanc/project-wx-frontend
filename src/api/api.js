import axios from 'axios';




const api = '/wxapi';


export const search = params => axios.post(`${api}/search/items`,params);
export const collection = params => axios.get(`${api}/user/getItemCollectionList`,{params:params});
export const del = params => axios.get(`${api}/user/removeItemCollection`,{params:(params)})
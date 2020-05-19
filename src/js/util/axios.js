import axios from 'axios';
import {browserHistory} from 'react-router';

//request拦截器全局加channel_type
axios.interceptors.request.use(config => {
	let {headers} = config;
	headers = Object.assign(headers, {"X-Channel": "TrMall", "X-Platform-Type": "WX", "X-Platform-From": "TrMall"});
	// headers = {...headers,"X-Channel":"TrMall", "X-Platform-Type":"WX", "X-Platform-From":"TrMall"};
	config = {...config, headers};
	return config;
}, error => {
	return Promise.reject(error);
});

//对返回的状态进行判断
axios.interceptors.response.use(response => {
	if (response.data.code === 401) {
		browserHistory.push(`/login?redirect_uri=${location.href}`);
		return
	}
	return response
}, error => {
	if (error.response && error.response.data.code === 401) {
		browserHistory.push(`/login?redirect_uri=${location.href}`);
		return
	}
	return Promise.reject(error);
});

export default axios
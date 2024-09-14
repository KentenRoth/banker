import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
	baseURL: 'http://localhost:8787',
	withCredentials: true,
});

instance.interceptors.request.use((request) => {
	const token = Cookies.get('accessToken');

	if (token) {
		request.headers.Authorization = `Bearer ${token}`;
	}
	return request;
});

export default instance;

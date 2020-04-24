/**
 * http配置
 */

import axios from 'axios'
// import store from '../store'
import {baseUrl} from '../config/env'

// axios 配置
axios.defaults.baseURL = baseUrl

// http request 拦截器
axios.interceptors.request.use(
	config => {
		// var token = store.getters.getUserInfo.token
		// console.log(token)
		// if (token) {
		// axios.defaults.headers.token = '11111111111'
		// }
		return config
	},
	err => {
		console.log(2)
		return Promise.reject(err)
	}
)

// http response 拦截器
axios.interceptors.response.use(
	response => {
		// console.log(response)
		return response
	},
	error => {
		if (error.response) {
			console.log(error)
		}
		// console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
		return Promise.reject(error)
	}
)

export default axios

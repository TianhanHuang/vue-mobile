import axios from '../config/axios'
import { baseUrl } from '../config/env'

/**
 **************************微信*****************************/
/** 
 * 获取所有栏目
 * @param {null} '' 代表获取所有栏目
 * @param {string} NewsClassID 某栏目下面的信息
 */
export const getAll = data => axios(baseUrl + '/Home/GetNewsClass', data)
// import vue from 'vue'
import axios from './http'

export default async (url = '', data = {}) => {
	return new Promise((resolve, reject) => {
    console.log(url)
		axios.post(url, {}, {params: data}).then((res) => {
      // res = res.data
      console.log(res)
			// if (res.error_no === 0) {
			// 	resolve(Decrypt(res.data))
			// } else {
			// 	console.log(url, data.data, res)
			// 	// vue.$vux.toast.text(res.error_info, 'middle')
			// 	reject(res)
			// }
		})
	})
}

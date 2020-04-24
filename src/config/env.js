/**
 * 配置编译环境和线上环境之间的切换
 *
 * h5Url: web页面域名地址
 * baseUrl: api域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl
if (process.env.NODE_ENV === 'development') {
	baseUrl = 'http://cshjylmr.vhost4.cnvp.com.cn'
} else if (process.env.NODE_ENV === 'production') {
	baseUrl = '/'
}

export {
	baseUrl
}

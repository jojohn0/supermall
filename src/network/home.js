// 该文件存放首页所有的请求
import { request } from "./request"

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}
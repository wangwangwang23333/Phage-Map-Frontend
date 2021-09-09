import request from '@/utils/request'

export function findBacteriaByKey(data) {
    /*
    返回所有的留言
    */
    return request({
        url: '/search/bacteria',
        method: 'get',
        params:{key:data}
    })
}
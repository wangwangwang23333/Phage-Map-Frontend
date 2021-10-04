import request from '@/utils/request'

export function findAllMap() {
    return request({
        url: '/map/all',
        method: 'get',
        params:{}
    })
}

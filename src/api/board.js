/*
和留言区有关的api
*/

import request from '@/utils/request'

export function getComment() {
    /*
    返回所有的留言
    */
    return request({
      url: '/customer/createtime',
      method: 'get'
    })
  }
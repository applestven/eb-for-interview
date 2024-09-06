// import useUserStore from '@/stores/user' //引入仓库，使用的是pinia
export const request = (options) => {
  return new Promise((resolve, reject) => {
    // 获取用户令牌
    // let token = useUserStore().token
    // 设置请求头
    const header = {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
      ...options.header // 可以传入额外的请求头参数
    }
    // ⭐在发送请求之前执行拦截操作
    uni.request({
      url: options.url, //接收请求的API
      method: options.method || 'GET', //接收请求的方式,如果不传默认为GET
      data: options.data || {}, //接收请求的data,不传默认为空
      header: header, //接收请求的header
      success(res) {
        // ⭐在这里处理接收到响应后处理响应数据
        // if (res.data.code != 0) {
        //   // 提示重新登录
        //   uni.$showMsg('请登录')
        //   // useUserStore().userLogout()
        //   setTimeout(() => {
        //     uni.switchTab({
        //       url: '/pages/login/login'
        //     })
        //   }, 1000)
        // }
        resolve(res.data) // 使用resolve将数据传递出去
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
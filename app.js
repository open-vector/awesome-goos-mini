var http = require('./utils/common.js')
var config = require('./utils/config.js')
App({
  onLaunch() {

    //获取设备类型 android/ios
    var searchData = ''
    wx.getSystemInfo({
      success: function (res) {
        searchData = res.system
      },
    })
    wx.setStorageSync('userIdEnc', searchData)

    if(searchData.indexOf('Android')!=-1){
      this.globalData.isIos = false
    }else if(searchData.indexOf('iOS')!=-1){
      this.globalData.isIos = true
    }
    console.log(searchData)

    const updateManager = wx.getUpdateManager();
    wx.getUpdateManager().onUpdateReady(function() {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  get: {
    req: http.get
  },
  post: {
    req: http.post
  },  
  postForm: {
    req: http.postForm
  },
  globalData: {
    hasLogin: false,
    isIos:false,
    userInfo: {
    },
    photoStartUrl: config.fileUrl,
    baseUrl: config.host
  }
})

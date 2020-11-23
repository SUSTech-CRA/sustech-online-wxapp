//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    url: "about:blank"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (query) {
    if (query.url) {
      // console.log("onload")
      // console.log(app.globalData.entry_url)
      this.setData({
        url: query.url
      })
    } else {
      this.setData({
        url: "https://sustech.online"
      })
    }
    //   if (app.globalData.userInfo) {
    //     this.setData({
    //       userInfo: app.globalData.userInfo,
    //       hasUserInfo: true
    //     })
    //   } else if (this.data.canIUse) {
    //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //     // 所以此处加入 callback 以防止这种情况
    //     app.userInfoReadyCallback = res => {
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   } else {
    //     // 在没有 open-type=getUserInfo 版本的兼容处理
    //     wx.getUserInfo({
    //       success: res => {
    //         app.globalData.userInfo = res.userInfo
    //         this.setData({
    //           userInfo: res.userInfo,
    //           hasUserInfo: true
    //         })
    //       }
    //     })
    //   }
    // },
    // getUserInfo: function (e) {
    //   console.log(e)
    //   app.globalData.userInfo = e.detail.userInfo
    //   this.setData({
    //     userInfo: e.detail.userInfo,
    //     hasUserInfo: true
    //   })
  },
  onShareAppMessage(options) {
    // console.log("share")
    // console.log(options.webViewUrl)
    let shareTitle = this.data.shareTitle
    var encode_url = "url=" + encodeURIComponent(options.webViewUrl)
    return {
      title: shareTitle,
      path: "pages/index/index?" + encode_url,
    }
  },
  getMSG(e) {
    // console.log('============这里返回postMessage对应的对象============')
    // console.log(e)
    // wx.showModal({
    //   title: JSON.stringify(e.detail.data),
    // })
    let last_item = e.detail.data.pop()
    this.setData({
      shareTitle: last_item.shareTitle
    })
  }
})
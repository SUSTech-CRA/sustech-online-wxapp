//index.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    url: app.globalData.DEFAULT_HOME_URL
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  onLoad: function (query) {
    // wx.showModal({
    //   title: "container " + JSON.stringify(query),
    // })
    let tmp_url = app.globalData.entry_url;
    app.globalData.entry_url = null;
    console.log("获取 app.globalData.entry_url: ", tmp_url);
    if (tmp_url) {
      // console.log("onload")
      console.log("container url: ", tmp_url)
      this.setData({
        url: tmp_url
      })
    } else {
      console.log("container url（缺省）: ", app.globalData.DEFAULT_HOME_URL)
      this.setData({
        url: app.globalData.DEFAULT_HOME_URL
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
    let shareTitle = this.data.shareTitle;
    let shareURL = this.data.shareURL;
    let args = encodeURIComponent('?utm_source=wx&utm_medium=share_card');
    if (options.webViewUrl) {
      var encode_url = "url=" + encodeURIComponent(options.webViewUrl) + args
    } else {
      var encode_url = "url=" + encodeURIComponent(shareURL) + args
    }
    console.log("分享链接: ", encode_url);
    // wx.showModal({
    //   title: JSON.stringify(encode_url),
    // })
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
    if (last_item.msgType == "heartbeat") {
      this.setData({
        shareTitle: last_item.shareTitle,
        shareURL: last_item.shareURL
      });
    }
  }
})
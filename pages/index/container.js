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
    url: app.globalData.DEFAULT_ONLINE_URL
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
        selected: 1
      })
    }
  },
  onLoad: function (options) {
    // wx.showModal({
    //   title: "container " + JSON.stringify(options),
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
      console.log("container url（缺省）: ", app.globalData.DEFAULT_ONLINE_URL)
      this.setData({
        url: app.globalData.DEFAULT_ONLINE_URL
      })
    }
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

  /**
   * 绑定心跳函数，获取标题、URL信息
   */
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
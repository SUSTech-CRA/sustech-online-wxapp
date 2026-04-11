// pages/talk/index.js
const app = getApp()

Page({

  data: {
    url: app.globalData.DEFAULT_TALK_URL
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
    app.changeTabBarItem()
  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage(options) {
    let shareTitle = this.data.shareTitle || "SUSTech Talks";
    let shareURL = this.data.shareURL || app.globalData.DEFAULT_TALK_URL;
    let args = encodeURIComponent('?utm_source=wx&utm_medium=share_card');
    if (options.webViewUrl) {
      var encode_url = "url=" + encodeURIComponent(options.webViewUrl) + args
    } else {
      var encode_url = "url=" + encodeURIComponent(shareURL) + args
    }
    console.log("分享链接: ", encode_url);
    return {
      title: shareTitle,
      path: "pages/index/index?" + encode_url,
    }
  },

  /**
   * 绑定心跳函数，获取标题、URL信息
   */
  getMSG(e) {
    let last_item = e.detail.data.pop()
    if (last_item.msgType == "heartbeat") {
      this.setData({
        shareTitle: last_item.shareTitle,
        shareURL: last_item.shareURL
      });
    }
  }

})


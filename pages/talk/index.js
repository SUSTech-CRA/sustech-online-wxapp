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
        selected: 1
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

  onShareAppMessage() {
    return {
      title: "SUSTech Talks"
    }
  },

})

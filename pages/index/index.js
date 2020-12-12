//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.entry_url) {
      let tmp_url = app.globalData.entry_url
      app.globalData.entry_url = null
      wx.redirectTo({
        url: '/pages/index/container?url=' + tmp_url,
      })
    } else {
      wx.redirectTo({
        url: '/pages/index/container?url=' + "https://sustech.online",
      })
    }
  }
})
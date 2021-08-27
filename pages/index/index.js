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
    // 供测试复制页面
    // let tmp_url = 'https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dcasdcasdc%26safe%3Dactive%26sxsrf%3DALeKk009wf-fAkeFC3zog1HKw--EhYa-oQ%253A1625387405897%26source%3Dhp%26ei%3DjXHhYInMMq-2mAXRkaTQAw%26iflsig%3DAINFCbYAAAAAYOF_nUFhnLNEV_Smq6xScuLU1P1Xxd2q%26oq%3Dcasdcasdc%26gs_lcp%3DCgdnd3Mtd2l6EAM6AggAOgcIABAKEMsBOgYIABAMEB5QggRYzAdgxwpoAHAAeAGAAagCiAH4CJIBBTAuMi4zmAEAoAEBqgEHZ3dzLXdpeg%26sclient%3Dgws-wiz%26ved%3D0ahUKEwjJxsn3_8jxAhUvG6YKHdEICToQ4dUDCAk%26uact%3D5'
    // wx.navigateTo({
    //   url: '/pages/index/redirect?outURL='+tmp_url,
    // })
    if (app.globalData.entry_url) {
      let tmp_url = app.globalData.entry_url
      app.globalData.entry_url = null
      wx.redirectTo({
        url: '/pages/index/container?url=' + tmp_url,
      })
    } else {
      wx.redirectTo({
        url: '/pages/index/container?url=' + "https://sustech.online/?utm_source=wx&utm_medium=miniapp",
      })
    }
  }
})
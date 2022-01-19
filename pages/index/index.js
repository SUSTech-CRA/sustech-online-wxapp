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
    // let tmp_url = 'https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3D%25E5%258D%2597%25E7%25A7%2591%25E6%2589%258B%25E5%2586%258C'
    // wx.navigateTo({
    //   url: '/pages/index/redirect?outURL='+tmp_url,
    // })
    // if (app.globalData.entry_url) {
    //   let tmp_url = app.globalData.entry_url;
    //   app.globalData.entry_url = null;
    //   console.log("获取输入url: ", tmp_url);
    //   wx.switchTab({
    //     url: '/pages/index/container?url=' + encodeURIComponent(tmp_url),
    //   })
    // } else {
    //   console.log("使用默认主页", app.globalData.DEFAULT_ONLINE_URL);
    //   wx.switchTab({
    //     url: '/pages/index/container?url=' + encodeURIComponent(app.globalData.DEFAULT_ONLINE_URL)
    //   })
    // }
    wx.switchTab({
      url: '/pages/index/container'
    })
  }
})
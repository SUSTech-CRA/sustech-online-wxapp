//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function (options) {
    // wx.showModal({
    //   title: JSON.stringify(options),
    // })
    if (options.query.q) {
      // 普通二维码扫描
      this.globalData.entry_url = decodeURIComponent(options.query.q)
    } else if (options.query.url) {
      // 参数跳转：包括分享卡片
      this.globalData.entry_url = decodeURIComponent(options.query.url)
    } else {
      this.globalData.entry_url = null
    }
    this.changeTabBarItem()
  },
  globalData: {
    userInfo: null,
    entry_url: null,
    DEFAULT_ONLINE_URL: "https://sustech.online/index-wx.html?utm_source=wx&utm_medium=miniapp",
    DEFAULT_DAILY_URL: "https://daily.sustech.online/?utm_source=wx&utm_medium=miniapp",
    DEFAULT_BUS_URL: "https://sustech.online/transport/bustimer-wx.html?utm_source=wx&utm_medium=miniapp",
    DEFAULT_CANTEEN_URL: "https://sustech.online/canteen/canteen-wx.html?utm_source=wx&utm_medium=miniapp"
  },
  changeTabBarItem: function () {
    wx.getSystemInfo({
      success: (res) => {
        var lang = res.language.substring(0, 2) || 'en'
        console.log("current language " + lang)
        if (lang === 'zh') {
          console.log("use chinese as default")
          this.setTabBarItems([
            { index: 0, text: '饭堂' },
            { index: 1, text: '手册' },
            { index: 2, text: '巴士' }
          ])
        } else {
          console.log("use english as default")
          this.setTabBarItems([
            { index: 0, text: 'Canteen' },
            { index: 1, text: 'Home' },
            { index: 2, text: 'Bus' }
          ])
        }
      }
    })
  },
  
  setTabBarItems: function (items) {
    items.forEach(function (item) {
      wx.setTabBarItem({
        index: item.index,
        text: item.text,
        success: function (res) {
          console.log('设置TabBar成功', res)
        },
        fail: function (res) {
          console.log('设置TabBar失败', res)
        }
      })
    })
  }
})
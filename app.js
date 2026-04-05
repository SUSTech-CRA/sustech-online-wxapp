// app.js
App({
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },

  onShow: function (options) {
    if (options.query.q) {
      this.globalData.entry_url = decodeURIComponent(options.query.q)
    } else if (options.query.url) {
      this.globalData.entry_url = decodeURIComponent(options.query.url)
    } else {
      this.globalData.entry_url = null
    }
    this.changeTabBarItem()
  },

  globalData: {
    entry_url: null,
    DEFAULT_ONLINE_URL: "https://sustech.online/index-wx.html?utm_source=wx&utm_medium=miniapp",
    DEFAULT_DAILY_URL: "https://daily.sustech.online/?utm_source=wx&utm_medium=miniapp",
    DEFAULT_BUS_URL: "https://sustech.online/transport/bustimer-wx.html?utm_source=wx&utm_medium=miniapp",
    DEFAULT_TALK_URL: "https://sustech.online/study/talks/talks-wx.html?utm_source=wx&utm_medium=miniapp"
  },

  changeTabBarItem: function () {
    wx.getSystemInfo({
      success: (res) => {
        var lang = res.language.substring(0, 2) || 'en'
        console.log("current language " + lang)
        if (lang === 'zh') {
          console.log("use chinese as default")
          this.setTabBarItems([
            { index: 0, text: '手册' },
            { index: 1, text: '巴士' },
            { index: 2, text: '讲座' }
          ])
        } else {
          console.log("use english as default")
          this.setTabBarItems([
            { index: 0, text: 'Home' },
            { index: 1, text: 'Bus' },
            { index: 2, text: 'Talks' }
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

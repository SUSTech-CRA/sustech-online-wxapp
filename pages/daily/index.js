// pages/daily/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: app.globalData.DEFAULT_DAILY_URL
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
      console.log("container url（缺省）: ", app.globalData.DEFAULT_DAILY_URL)
      this.setData({
        url: app.globalData.DEFAULT_DAILY_URL
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
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
      path: "pages/daily/index?" + encode_url,
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
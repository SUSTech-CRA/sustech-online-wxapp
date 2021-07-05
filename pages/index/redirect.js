// pages/index/redirect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  set_style(show_filemsg, show_copymsg) {
    this.setData({
      style_file: show_filemsg ? 'block' : 'none',
      style_copy: show_copymsg ? 'block' : 'none',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let the_url = decodeURIComponent(options.outURL);
    let handleFile = options.handleFile;
    if (handleFile === 'true') {
      let file_ext = options.ext;
      this.set_style(true, false);
      wx.downloadFile({
        url: the_url, //要预览的 PDF 的地址
        success: function (res) {
          console.log(res);
          if (res.statusCode === 200) { //成功
            var Path = res.tempFilePath //返回的文件临时地址，用于后面打开本地预览所用
            wx.openDocument({
              fileType: file_ext, // 需要写上文件类型才能预览，不让回找系统应用打开，体验不好
              filePath: Path, //要打开的文件路径
              success: function (res) {
                console.log('打开文件成功');
              },
              complete: function (res) {
                wx.navigateBack({
                  delta: 1,
                })
              },
            })
          }
        },
        fail: function (res) {
          console.log(res); //失败
          this.set_style(false, true);
          this.setData({
            to_paste_url: the_url
          })
        }
      })
    } else {
      this.set_style(false, true);
      this.setData({
        to_paste_url: the_url
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
  onShow: function () {},

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
   * 用户点击右上角分享（禁用）
   */
  // onShareAppMessage: function () {
  // },
  gobackCallback(e) {
    wx.navigateBack({
      delta: 1,
    })
  },
  copyCallback(e) {
    wx.setClipboardData({
      data: this.data.to_paste_url,
    });
    wx.navigateBack({
      delta: 1,
    });
  }
})
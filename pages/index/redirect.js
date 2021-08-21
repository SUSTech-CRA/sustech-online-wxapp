// pages/index/redirect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  set_style(show_filemsg, show_copymsg) {
    this.setData({
      style_file: show_filemsg,
      style_copy: show_copymsg,
    })
  },
  /**
   * Format bytes as human-readable text.
   * 
   * @param bytes Number of bytes.
   * @param si True to use metric (SI) units, aka powers of 1000. False to use 
   *           binary (IEC), aka powers of 1024.
   * @param dp Number of decimal places to display.
   * 
   * @return Formatted string.
   */
  humanFileSize(bytes, si = false, dp = 1) {
    const thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
      return bytes + ' B';
    }
    const units = si ?
      ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] :
      ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10 ** dp;
    do {
      bytes /= thresh;
      ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
    return bytes.toFixed(dp) + ' ' + units[u];
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
      // 下载监听进度
      const downloadTask = wx.downloadFile({
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
      downloadTask.onProgressUpdate((res) => {
        console.log('下载进度', res.progress)
        // console.log('已经下载的数据长度', res.totalBytesWritten)
        console.log('已经下载的数据长度', this.humanFileSize(res.totalBytesWritten, true))
        // console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
        console.log('预期需要下载的数据总长度', this.humanFileSize(res.totalBytesExpectedToWrite, true))
        this.setData({
          file_size: this.humanFileSize(res.totalBytesExpectedToWrite, true),
          progress: res.progress
        });
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
  onShow: function () { },

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
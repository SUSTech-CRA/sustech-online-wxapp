Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/container",
      iconPath: "/image/icon_home.png",
      selectedIconPath: "/image/icon_home_HL.png",
      text: "手册"
    }, {
      pagePath: "/pages/bus/index",
      iconPath: "/image/icon_bus.png",
      selectedIconPath: "/image/icon_bus_HL.png",
      text: "巴士"
    },]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
# 南科手册 - 小程序

Online manual for SUSTecher.

**微信小程序二维码**

![qrcode](./qr-code.jpg)

**截图**

<img src="Screenshot.png" width="400px" />

## 帮助我们完善

主项目托管在 [SUSTech-CRA/sustech-online-ng](https://github.com/SUSTech-CRA/sustech-online-ng)

小程序托管在 [SUSTech-CRA/sustech-online-wxapp](https://github.com/SUSTech-CRA/sustech-online-wxapp)

## 编译和测试
1. 下载并安装微信开发者工具：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
2. 申请测试号，获取 AppID：https://developers.weixin.qq.com/miniprogram/dev/devtools/sandbox.html
3. 配置业务域名（web-view中需要访问的网站）
4. 在 `project.config.json` 中修改小程序 AppID 的字段 `appid`
5. 打开微信开发者工具导入项目

## 提示
* 项目依赖 web-view，如需发布仅支持企业、个体户注册的小程序号，不支持个人号。
* 业务域名需要验证，仅能访问在白名单中的域名
* web-view 承载的网站最好引用 [wx_helper.js](https://github.com/SUSTech-CRA/sustech-online-ng/blob/master/docs/.vuepress/public/wx_helper.js) 脚本和 微信官方[JS-SDK](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html) -- [jweixin-1.6.0.js](http://res.wx.qq.com/open/js/jweixin-1.6.0.js)，否则分享出的卡片没有承载网站的标题（若 JS 脚本加载失败，标题默认为小程序的名字）

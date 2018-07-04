//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    src: [
      '/pages/images/search.png',
      '/pages/images/search-2.png'
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  // 边栏菜单动画
  setMenuNatural: function (normal) {
    var animationW = wx.createAnimation({
      duration: 200
    });
    var animationM = wx.createAnimation({
      duration: 200
    });
    var menuStatus = false;
    if (this.data.gogostatus) {
      animationW.width("100%").height("100vh").top("0vh").left("0%").step();
      animationM.right("40%").step();
      menuStatus = false;
    } else {
      animationW.width("90%").height("100vh").top("0vh").left("-100%").step();
      animationM.right("0%").step();
      menuStatus = true;
    }
    this.setData({
      animationW: animationW.export(),
      animationM: animationM.export(),
      gogostatus: menuStatus,
      cityMenus: common.getCityList()
    })
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

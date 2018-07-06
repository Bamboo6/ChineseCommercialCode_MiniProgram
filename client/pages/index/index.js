//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    original: "",
    code: "",
    classify: "co",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  confirm: function (e) {
    this.setData({
      original: e.detail.value
    })
  },

  search: function (e) {
    var arr = "";
    var str = this.data.original.toString();
    if (!this.data.original.trim()) {
      return
    }
    if (this.data.original.length > 1) {
      var split = str.split("");
    }
    for (var i = 0; i < split.length; i++) {
      var char = split[i];
      wx.request({
        url: 'https://llm2isay.qcloud.la/search.php',
        data: {
          chinese: char,
          classify: this.data.classify,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: (res) => {
          console.log("chinese: " + char);
          console.log("split: " + split.length);
          arr = arr+res.data[0].code;
          this.setData({
            array: arr,
          })
          console.log("res--");
          console.log(res.data[0].code);
        }
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
  onShareAppMessage: function () {

  }
})
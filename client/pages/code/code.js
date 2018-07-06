// pages/code/code.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    original: "",
    chinese: "",
    classify: "ch",
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
    console.log("ininininin");
    var arr = "";
    var stringarr = new Array;
    var z = "";
    var str = this.data.original.toString();
    if (!this.data.original.trim()) {
      return
    }
    if (this.data.original.length > 1) {
      var split = str.split("");
    }
    for(var j = 0 ; j < split.length; j=j+4){
      z = j/4;
      stringarr[z] = String(split[j]+split[j+1]+split[j+2]+split[j+3]);
    }
    for (var i = 0; i < stringarr.length; i++) {
      var char = stringarr[i];
      wx.request({
        url: 'https://llm2isay.qcloud.la/search.php',
        data: {
          code: char,
          classify: this.data.classify,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: (res) => {
          console.log("chinese: " + char);
          console.log("split: " + split.length);
          arr = arr+res.data[0].chinese;
          this.setData({
            array: arr,
          })
          console.log("res--");
          console.log(res.data);
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
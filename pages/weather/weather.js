Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        wx.request({
          url: 'https://api.caiyunapp.com/v2/mjj2W=PzU0UpySsB/' + res.longitude + ',' + res.latitude + '/forecast.json',
          success: function (res) {
            if(res.data.status =='ok'){
              that.setData({
                result: res.data.result.daily
              })
            }else{
              wx.showToast({
                title: '获取数据失败代码是：' + res.data.status,
              })
            }
            
          }
        })
      }
    })
   
  }
})
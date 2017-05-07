
var app = getApp()
Page({
  data:{
    resultdata:{},
  },
  onLoad:function(times){
    // 生命周期函数--监听页面加载
    var self = this
    times = app.globalData.times
    wx.request({
      url: 'https://v.juhe.cn/calendar/day?date='+times+'&key=f13db608eb0caa288dc19eeb2d836e48',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
         wx.showToast({
                            title: '获取数据成功',
                            icon: 'success',
                            duration: 2000
                            })
        // success
        self.setData({
          resultdata:res.data
        })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  getTime:function(){

  }
})
function GetTimes(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [year, month, day].map(formatNumber).join('-') 
}
function formatNumber(n) {
  n = n.toString()
  return n
}

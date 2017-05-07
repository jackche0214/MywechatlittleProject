Page({
  data:{
    phone:'',
    getphonenumber:{},
    oldphone:''
  },
  showphone:function(e){
    this.setData(
        {
            oldphone:e.detail.value
        }
        
    )
  },
  bindSearch:function(){
      this.getphone(this.data.oldphone)
  },
  getphone:function(phone){
    var self = this
      wx.request({
        url: 'https://apis.juhe.cn/mobile/get?phone='+phone+'&key=f480ab6e72e62b9b0da763366cc7a499',
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
                self.setData(
                {
                    getphonenumber:res.data,
                    phone:''
                }
                
    )
        },
        fail: function(res) {
            
          // fail
        },
        complete: function(res) {
          // complete
        }
      })
  }
})
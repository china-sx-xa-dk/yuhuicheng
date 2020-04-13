//index.js
//获取应用实例
const app = getApp()
//云开发数据库
const DB = wx.cloud.database().collection("list")
Page({
  addData() {
    DB.add({
      data:{
        name:'岳凯01',
        age:32
      },
      success(res){
        console.log("添加成功", res)
      },
      fail(res) {
        console.log("添加失败", res)
      }
    })
  }
})

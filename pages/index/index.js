// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    indexTypeList: [
      {
        id: 23,
        name: '为你推荐'
      }, {
        id: 1,
        name: '好券商品'
      },
      {
        id: 2,
        name: '精选卖场'
      },
      {
        id: 10,
        name: '9.9包邮'
      },
      {
        id: 15,
        name: '京东配送'
      },
      {
        id: 22,
        name: '实时热销榜'
      },
      {
        id: 24,
        name: '数码家电'
      },
      {
        id: 25,
        name: '超市'
      },
      {
        id: 26,
        name: '母婴玩具'
      },
      {
        id: 27,
        name: '家具日用'
      },
      {
        id: 28,
        name: '美妆穿搭'
      },
      {
        id: 30,
        name: '图书文具'
      },
      {
        id: 30,
        name: '图书文具'
      },
      {
        id: 31,
        name: '今日必推'
      },
      {
        id: 32,
        name: '京东好物'
      },
      {
        id: 33,
        name: '京东秒杀'
      },
      {
        id: 41,
        name: '自营热卖榜'
      },

    ],
    userInfo: {},
    active: 0,
    searchTip: '苹果13pro',
    searchList: ['苹果13pro', '儿童保温水杯', '华为pocket', '迪奥999'],
    goodsList: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.getJFgoodsList()
  },
  getJFgoodsList() {
    this.setData({ goodsList: [] })
    let currentTypeInfo = this.data.indexTypeList[this.data.active]
    console.log(currentTypeInfo)
    let url = '/goods/jingfen/query'
    let data = { eliteId: currentTypeInfo.id }
    app.post.req(url, data, (res) => {
      if (res) {
        this.setData({ goodsList: res.result })
      }
    })
  },
  onChange(event) {
    this.setData({
      active: event.detail.name
    })
    this.getJFgoodsList()
  },
  togoSearchDetail() {
    console.log('togoSearchDetail')
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

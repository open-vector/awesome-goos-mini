import Toast from '@vant/weapp/toast/toast';
// 获取应用实例
const app = getApp()

Page({
  data: {
    articleInfoList: []
  },
  onLoad() {

    let articleInfoList = [
      {
        id: 4,
        title: '5大理由，让您爱上MIUI 13，13它是真的香！',
        imageUrl: 'https://qna.smzdm.com/202201/01/61d01627e93674589.jpg_fo742.jpg',
        favCount: 128,
        commentCount: 19,
        tags: ['使用评测', '电子数码']
      },
      {
        id: 1,
        title: '历时半年佛系组套件，手里键003+胡子圣熊猫V3+艾酷MOD001',
        imageUrl: 'https://qna.smzdm.com/202112/26/61c7490e0e0106805.jpg_fo742.jpg',
        favCount: 56,
        commentCount: 2,
        tags: ['使用评测', '电子数码']
      },
      {
        id: 2,
        title: '2022年信用卡权益集结地',
        imageUrl: 'https://qna.smzdm.com/202112/31/61cf237737c952926.jpg_fo742.jpg',
        favCount: 3,
        commentCount: 45,
        tags: ['使用评测', '电子数码']
      },
      {
        id: 3,
        title: '逢年过节，走亲访友，怎少得了几盒好看的伴手礼呢！',
        imageUrl: 'https://qna.smzdm.com/202112/31/61cf18fa2140e4836.jpg_fo742.jpg',
        favCount: 145,
        commentCount: 35,
        tags: ['使用评测', '电子数码']
      }
      
    ]

    this.setData({ articleInfoList: articleInfoList })

  },
  toArticleDetail() {
    Toast('开发中。。。');
  }
})

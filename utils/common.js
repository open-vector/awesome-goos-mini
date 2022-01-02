var util = require('../utils/util.js');
var config = require('./config.js');
let rootUrl =config.host ;
function postForm(url, data, cb) {
    // console.log(config)
    wx.request({
        url: rootUrl + url,
        data: data,
        method: 'post',
        header: {
            "Content-Type": "application/x-www-form-urlencoded" 
        },
        success: function (res) {
            return typeof cb == "function" && cb(res.data)
        },
        fail: function () {
            util.showErrorToast('服务器繁忙,稍后重试');
            return typeof cb == "function" && cb(false)
        }
    })
}

function postData(url, data, cb) {
    // console.log(config)
    wx.request({
        url: rootUrl + url,
        data: data,
        method: 'post',
        header: {
            "Content-Type": "application/json" 
        },
        success: function (res) {
            return typeof cb == "function" && cb(res.data)
        },
        fail: function () {
            util.showErrorToast('服务器繁忙,稍后重试');
            return typeof cb == "function" && cb(false)
        }
    })
}
function getData(url, data, cb) {
    wx.request({
        url: rootUrl + url,
        data: data,
        method: 'get',
        header: { 
            "Content-Type": "json", 
        },
        success: function (res) {
            return typeof cb == "function" && cb(res.data)
        },
        fail: function (e) {
            util.showErrorToast('服务器繁忙,稍后重试');
            return typeof cb == "function" && cb(false)
        }
    })
}
module.exports = {
    post: postData,
    postForm: postForm,
    get : getData
}
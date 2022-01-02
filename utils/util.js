const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function showErrorToast(msg) {
  wx.showToast({
    title: msg,
    duration: 2000,
    icon: 'none'
  })
}

function showToast(msg) {
  wx.showToast({
    title: msg,
    duration: 2000,
    icon: 'success'
  })
}

module.exports = {
  formatTime,
  showToast,
  showErrorToast
}

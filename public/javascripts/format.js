
//格式化文章发布时间
//暂时弃置
function getNowFormatDate() {
    var myDate = itemOne.releaseDate;
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var date = myDate.getDate();
    var hour = myDate.getHours();
    var min = myDate.getMinutes();
    var sec = myDate.getSeconds();
    if (month >= 1 && month <= 9) month = '0' + month;
    if (date >= 1 && date <= 9) date = '0' + date;
    if (hour >= 0 && hour <= 9) hour = '0' + hour;
    if (min >= 0 && min <= 9) min = '0' + min;
    if (sec >= 0 && sec <= 9) sec = '0' + sec;
    var toDay = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;
    return toDay;
}


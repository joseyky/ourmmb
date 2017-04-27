/**
 * Created by meng on 2017/4/2.
 */

//设置本地存储函数
function setStorage(key,value){
    return window.sessionStorage.setItem(key,value);
}

//获取本地存储函数
function getStorage(name){
    return window.sessionStorage.getItem(name);
}

// 获取字符串函数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
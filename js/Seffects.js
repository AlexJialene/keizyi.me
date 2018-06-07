//Copyright (c) 2018 Lamkeizyi alexdennis.lam@gmail.com
//Waylee.net 代码源于网络，摘抄请勿删除此注释，2017.11.12
//init
document.getElementById("willerce").style.transform = "scale(1,1)";

//判断用户PC/Phone平台
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return false;
        console.log("phone")
    } else {
        return true;
        console.log("pc console")
    }
}

var p = browserRedirect();

if(!p){
    $(".headline").html("");
}


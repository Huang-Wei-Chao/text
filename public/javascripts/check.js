document.write("<script src='../javascripts/regexp.js'></script>");


//检测密码 register.ejs
$(document).ready(function () {
    $("#passWordRepeat").blur(function () {
        var pwd = $("#passWord").val();
        var pwdre = $("#passWordRepeat").val();
        if (checkPwd.test(pwd) && pwd == pwdre) {
            $("#showMessagePwd").html("<font color='green'>密码一致</font>");
            $("#register").attr("disabled", false);
        } else {
            $("#showMessagePwd").html("<font color='red'>密码不一致或长度小于6位</font>");
            $("#register").attr("disabled", true);
        }
    });
});


//检测用户名  register.ejs
$(document).ready(function () {
    $("#userName").blur(function () {
        var uname = $("#userName").val();
        if (checkUname.test(uname) && uname.length > 5 && uname.length < 15) {
            $("#showMessageUname").html("<font color='green'></font>");
            $("#register").attr("disabled", false);
        } else {
            $("#showMessageUname").html("<font color='red'>支持6到14位汉字、字母及数字组成</font>");
            $("#register").attr("disabled", true);
        }
    });
});


//Ajax动态检测用户名重复




//记住密码
window.onload = function () {
    var logForm = document.getElementById('loginForm');
    var uname = document.getElementById('userName');
    var pword = document.getElementById('passWord');
    var repword = document.getElementById('remember');

    //页面初始化时，如果帐号密码cookie存在则填充
    if (getCookie('userName') && getCookie('passWord')) {
        uname.value = getCookie('userName');
        pword.value = getCookie('passWord');
        repword.checked = true;
    }

    //复选框勾选状态发生改变时，如果未勾选则清除cookie
    repword.onchange = function () {
        if (!this.checked) {
            delCookie('userName');
            delCookie('passWord');
        }
    };

    //表单提交事件触发时，如果复选框是勾选状态则保存cookie
    logForm.onsubmit = function () {
        if (remember.checked) {
            setCookie('userName', uname.value, 7);//保存帐号密码到cookie，有效期7天
            setCookie('passWord', pword.value, 7);
        }
    };
};


//获取cookie
function getCookie(name) {
    var reg = RegExp(name + '=([^;]+)');
    var arr = document.cookie.match(reg);
    if (arr) {
        return arr[1];
    } else {
        return '';
    }
}


//设置cookie
function setCookie(name, value, day) {
    var date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = name + '=' + value;
}


//删除cookie
function delCookie(name) {
    setCookie(name, null, -1);
}



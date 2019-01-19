//清空添加数据 add.ejs
$(document).ready(function () {
    $("#resetButton").click(function () {
        var res = confirm("是否清空所有");
        if (res == true) {
            $("#contentId").val(" ");
            $("#titleId").val(" ");
        }
    });
});




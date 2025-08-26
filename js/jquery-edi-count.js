var ip = returnCitySN["cip"];
var cookie_name = 'userName';
var cookie_value = getCookie(cookie_name);
var url = window.location.href;
var domainUrl = "xgyzm.alimaomao.top";
var cz = "访问";

function getCookie(cookie_name) {
    var allcookies = document.cookie;

    var cookie_pos = allcookies.indexOf(cookie_name);

    if (cookie_pos != -1) {

        cookie_pos = cookie_pos + cookie_name.length + 1;

        var cookie_end = allcookies.indexOf(";", cookie_pos);

        if (cookie_end == -1) {
            cookie_end = allcookies.length;

        }
        var value = unescape(allcookies.substring(cookie_pos, cookie_end));
    } else {
        value = "游客";
    }
    return value;
}

var postUrl = "http://" + domainUrl + "/log_one.php";

$.ajax({
    type: "POST",
    url: postUrl,
    data: "ip=" + ip + "&url=" + url + "&name=" + cookie_value + "&cz=" + cz,
    success: function () {

    }
});
//alert(cookie_value);
if (cookie_value != "游客") {
    $("#userName").html(cookie_value);
    //document.getElementById("login").style.display = "none";
    //document.getElementById("reg").style.display = "none";
    //document.getElementById("tuichu").style.display = "block";
    //document.getElementById("userName").style.display = "block";
    $("#login").hide();
    $("#reg").hide();
    $("#tuichu").show();
    $("#userName").show();
}

var keywords = '';
$.ajax({
    type: 'POST',
    url: "http://" + domainUrl + "/allkeyword.php",
    dataType: "JSON",
    success: function (data) {
        //alert(data);
        // console.log(data);
        keywords = '|' + data + '|';
        console.log(keywords);
        var keys = keywords.split("|");
        console.log(keys);

    }
});


$("input").bind('input propertychange', function () {
    var that = $(this);
    if (keywords.indexOf('|' + that.val() + '|') > -1) {
        alert('出现屏蔽字，清空屏蔽字输入框内容');
        that.val('');
        return false;
    }


});

$("textarea").bind('input propertychange', function () {
    var that = $(this);
    if (keywords.indexOf('|' + that.val() + '|') > -1) {
        alert('出现屏蔽字，清空屏蔽字输入框内容');
        that.val('');
        return false;
    }

});


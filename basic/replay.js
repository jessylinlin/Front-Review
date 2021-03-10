// ajax表单
$.ajax({
  url: "${pageContext.request.contextPath}/public/testupload",
  type: "post",
  data: { username: username },
  success: function (data) {
    window.clearInterval(timer);
    console.log("over..");
  },
  error: function (e) {
    alert("错误！！");
    window.clearInterval(timer);
  }
});

//原生
var submitBtn = document.getElementById('submit');
submitBtn.onclick(function (e) {
  var xml = new XMLHttpRequest();
  xml.open('get', 'send.php', true);
  xml.send();
  xml.onreadystatechange = function () {
    console.log(xhr.status);

    if (xhr.status = '200' && xhr.readyState == 4) {
      console.log(xhr.responseText)
    }
  }
})

//判断数组
var arr = [];
arr instanceof Array;
arr.constructor == Array;
Array.isArray(arr);

function isArray (arr) {
  return Array.isArray(arr) || Object.prototype.toString.call(arr) === '[object Array]'
}
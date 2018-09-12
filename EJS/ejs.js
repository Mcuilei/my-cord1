//加载ejs模板引擎  处理html数据
var ejs =require("ejs");
/**
 * <%=%> 输出数据
 * <%#%> 注释
 * <%_%> 删除首位空格
 * <%-%> 非转义字符
* */
var str = "我今天买了一个表<%= a %>";
var data ={
    a:"QNm"
};
//render渲染  首个参数html 第二参数是渲染数据
var html = ejs.render(str,data);
console.log(html);

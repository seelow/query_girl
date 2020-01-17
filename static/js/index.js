$(function(){
    var flag_n=0;
    var flag_y=0;
　　$("#nb").click(function(){
    if(flag_n==0){
        alert("工资上交");
        }
    if(flag_n==1){
             alert("家务全包");
        }
        flag_n++;
　　});
    $("#yb").click(function(){
    if(flag_y==0){
        alert("真的吗?你答应了?");
        }
    if(flag_y==1){
             alert("给我发消息吧,爱你");
            data = "<div style=\"text-align: center; border: 0;\">\n" +
                "        <img alt=\"\" src=\"../static/images/love.jpg\" class=\"ib\" style=\"display: inline-block\" />\n" +
                "    </div>"
            var bodyshow = $(".body");
            bodyshow.text("");
            bodyshow.append(data);
        }
        flag_y++;
　　});
})
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
    if(flag_n==2){
             alert("房产证写你的名字");
        }
    if(flag_n==3){
             alert("保大");
        }
    if(flag_n==4){
             alert("我妈会游泳");
        }
    if(flag_n==5){
             alert("不跟你吵架，会撒娇，会卖萌");
        }
    if(flag_n==6){
             alert("答应我吧");
        }
    if(flag_n==7){
             alert("答应我吧");
        }
    if(flag_n==8){
             alert("答应我吧");
        }
    if(flag_n==9){
             alert("答应我吧");
        }
    if(flag_n==10){
             alert("答应我吧");
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
            flag_n = 0;
            flag_y = 0;
        }
        flag_y++;
　　});
})
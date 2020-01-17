$(function(){
    var flag_n=0;
    var flag_y=0;
　　$("#nb").click(function(){
    switch (flag_n)
    {
        case 0:x="工资上交";
        break;
        case 1:x="家务全包";
        break;
        case 2:x="房产证写你的名字";
        break;
        case 3:x="保大";
        break;
        case 4:x="我妈会游泳";
        break;
        case 5:x="不跟你吵架，会撒娇，会卖萌";
        break;
        default:
        x="答应我吧";
    }
        alert(x);
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

function findGreen(){
    var i=0;
    requestScreenCapture();  
    //循环找色，找到红色(#ff0000)时停止并报告坐标
    
        var img = captureScreen();
        var point = findColor(img, "#1DA06D");
        if(point){
            toast("找到绿色，坐标为(" + point.x + ", " + point.y + ")");
            point.y= point.y+50;
            click(point.x,point.y);
            return true;
        }else{
            toast("没有找到绿色");
            return false;
           }

}

function collectGreen(){
    var width=device.width;
    var i,j;
    
    //盲点收自己的能量
    for(i=370;i<=800;){//y方向点击范围
        threads.start(function(){
            for(j=300;j<width-100;){//x方向点击范围
               click(j,i);
               j=j+150;
            }
        });
        sleep(1000);
        i=i+100;
    }
    
    toast("收集完成");

}




launchApp("支付宝");
sleep(2000);
var w=text("蚂蚁森林").className("android.widget.TextView").findOne();
var b=w.bounds();
click(b.centerX(),b.centerY());
toast("点击成功");
sleep(2000);
var i=0;
while(i<6){
    swipe(500,500,500,0,1000);
    i++;
}

text("查看更多好友").click();
sleep(2000);



while(true){
    var e;
    e=findGreen();
    sleep(3000);
    if(e){
        collectGreen();
    }else{
        swipe(500,500,500,0,1000);
    }
    
    back();
    sleep(2000);
    swipe(500,500,500,0,1000);

}

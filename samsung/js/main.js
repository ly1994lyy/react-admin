var e = 0;
var c = 0;
function run(){
    e++;
    c++;
    e = e==7?0:e;
    c = c==2?0:c;
    $('#banner img').eq(e).fadeIn().siblings('img').fadeOut();
    $('#banner .banner-icon ul li').eq(e).css('background','#3414a3').siblings('li').css('background','#b0b8cc');
    $('#pic-banner a img').eq(c).fadeIn().parent().siblings().find('img').fadeOut();
    $('#pic-banner .pic-icon ul li').eq(e).css('background','#572faf').siblings('li').css('background','#d6d6dc');
}

var timer =  setInterval(run,2000);

var e = 0;
function run(){
    e++;
    e = e==7?0:e;
    $('#banner img').eq(e).fadeIn().siblings('img').fadeOut();
    $('#banner .banner-icon ul li').eq(e).css('background','#3414a3').siblings('li').css('background','#b0b8cc');
    
}

var timer =  setInterval(run,2000);

$('#banner .banner-icon ul li').click(
    function(){
        var i = $(this).index();
        $(this).css('background','#3414a3').siblings().css('background','#b0b8cc');
        $('#banner img').eq(i).fadeIn().siblings('img').fadeOut();
    }
) 

$('#banner').hover(
    function(){
        clearInterval(timer);
    },
    function(){
        timer = setInterval(run,2000);
    }
)

var a=0;
function run2(){
    a++;
    a = a==2?0:a;
    $('#pic-banner a img').eq(c).fadeIn().parent().siblings().find('img').fadeOut();
    $('#pic-banner .pic-icon ul li').eq(c).css('background','#572faf').siblings('li').css('background','#d6d6dc');
}

var timer2 = setInterval(run2, 2000);

$('#pic-banner .pic-icon ul li').click(
    function(){
        var i = $(this).index();
        $(this).css('background','#572faf').siblings('li').css('background','#d6d6dc');
        $('#pic-banner a img').eq(i).fadeIn().parent().siblings().find('img').fadeOut();
    }
) 

var i=0;
function listBanner(){
    i++;
    i = i==4?0:i;
    $('#list .list-top ul li').eq(i).addClass('active').siblings('li').removeClass('active');
    $('#list .list-good').eq(i).css('display','flex').siblings('.list-good').css('display','none');
}

var listtimer = setInterval(listBanner, 2000);

var c=0;
function listBanner2(){
    c++;
    c = c==4?0:c;
    $('#list2 .list-top ul li').eq(c).addClass('active').siblings('li').removeClass('active');
    $('#list2 .list-good').eq(c).css('display','flex').siblings('.list-good').css('display','none');
}

var listtimer2 = setInterval(listBanner2, 2000); 
//大轮播图
var e = 0;
function run(){
    e++;
    e = e==7?0:e;
    $('#banner img').eq(e).fadeIn().siblings('img').fadeOut();
    $('#banner .banner-icon ul li').eq(e).css('background','#3414a3').siblings('li').css('background','#b0b8cc');
    
}
var timer =  setInterval(run,3000);

//大轮播图点击
$('#banner .banner-icon ul li').click(
    function(){
        e = $(this).index();
        $(this).css('background','#3414a3').siblings().css('background','#b0b8cc');
        $('#banner img').eq(e).fadeIn().siblings('img').fadeOut();
    }
) 

//大轮播图鼠标移入移出
$('#banner').hover(
    function(){
        clearInterval(timer);
    },
    function(){
        timer = setInterval(run,3000);
    }
)

//小轮播图
var a=0;
function run2(){
    a++;
    a = a==2?0:a;
    $('#pic-banner a img').eq(c).fadeIn().parent().siblings().find('img').fadeOut();
    $('#pic-banner .pic-icon ul li').eq(c).css('background','#572faf').siblings('li').css('background','#d6d6dc');
}

var timer2 = setInterval(run2, 3000);

$('#pic-banner .pic-icon ul li').click(
    function(){
        a = $(this).index();
        $(this).css('background','#572faf').siblings('li').css('background','#d6d6dc');
        $('#pic-banner a img').eq(a).fadeIn().parent().siblings().find('img').fadeOut();
    }
) 

$('#pic-banner').hover(
    function(){
        clearInterval(timer2);
    },
    function(){
        timer2 = setInterval(run2,3000);
    }
)

//配件的轮播效果
var i=0;
function listBanner(){
    i++;
    i = i==3?0:i;
    $('#list .list-top ul li').eq(i).addClass('active').siblings('li').removeClass('active');
    $('#list .list-good').eq(i).css('display','flex').siblings('.list-good').css('display','none');
}

$('#list .list-top ul li').hover(function(){
    clearInterval(listtimer)
},function(){
    setInterval(listBanner, 3000)
})

$('#list .list-top ul li').click(function(){
    i = $(this).index();
    $(this).addClass('active').siblings('li').removeClass('active');
    $('#list .list-good').eq(i).css('display','flex').siblings('.list-good').css('display','none');
})

var listtimer = setInterval(listBanner, 3000);

$('#list .list-good').hover(function(){
    clearInterval(listtimer);
},function(){
    listtimer = setInterval(listBanner, 3000);
})

$('#list .list-left').hover(function(){
    $(this).css({'background':'#a7adca','color':'#fff'});
},function(){
    $(this).css({'background':'#fff','color':'#8485a0'});
})

$('#list .list-left').click(function(){
    i--;
    i = i===-1?2:i;
    $('#list .list-top ul li').eq(i).addClass('active').siblings('li').removeClass('active');
    $('#list .list-good').eq(i).css('display','flex').siblings('.list-good').css('display','none');
})

$('#list .list-right').hover(function(){
    $(this).css({'background':'#a7adca','color':'#fff'});
},function(){
    $(this).css({'background':'#fff','color':'#8485a0'});
})

$('#list .list-right').click(function(){
    i++;
    i = i==3?0:i;
    $('#list .list-top ul li').eq(i).addClass('active').siblings('li').removeClass('active');
    $('#list .list-good').eq(i).css('display','flex').siblings('.list-good').css('display','none');
})

//为你推荐的轮播效果
var c=0;
function listBanner2(){
    c++;
    c = c==4?0:c;
    $('#list2 .list-top ul li').eq(c).addClass('active').siblings('li').removeClass('active');
    $('#list2 .list-good').eq(c).css({'display':'flex','justify-content': 'space-between'}).siblings('.list-good').css('display','none');
}

var listtimer2 = setInterval(listBanner2, 3000); 

$('#list2 .list-top ul li').hover(function(){
    clearInterval(listtimer2)
},function(){
    setInterval(listBanner2, 3000)
})

$('#list2 .list-top ul li').click(function(){
    c = $(this).index();
    $(this).addClass('active').siblings('li').removeClass('active');
    $('#list2 .list-good').eq(c).css('display','flex').siblings('.list-good').css('display','none');
})

$('#list2 .list-good').hover(function(){
    clearInterval(listtimer2);
},function(){
    listtimer2 = setInterval(listBanner2, 3000);
})


$('#list2 .list-left').hover(function(){
    $(this).css({'background':'#a7adca','color':'#fff'});
},function(){
    $(this).css({'background':'#fff','color':'#8485a0'});
})

$('#list2 .list-left').click(function(){
    c--;
    c = c===-1?3:c;
    $('#list2 .list-top ul li').eq(c).addClass('active').siblings('li').removeClass('active');
    $('#list2 .list-good').eq(c).css('display','flex').siblings('.list-good').css('display','none');
})

$('#list2 .list-right').hover(function(){
    $(this).css({'background':'#a7adca','color':'#fff'});
},function(){
    $(this).css({'background':'#fff','color':'#8485a0'});
})

$('#list2 .list-right').click(function(){
    c++;
    c = c==4?0:c;
    $('#list2 .list-top ul li').eq(c).addClass('active').siblings('li').removeClass('active');
    $('#list2 .list-good').eq(c).css('display','flex').siblings('.list-good').css('display','none');
})

//菜单栏固定
$(window).scroll(function(){
    if ($(this).scrollTop()>=36){
        $('.navbar').css({position:'fixed',top:0,zIndex: 99})
    }else{
        $('.navbar').css('position','static');
    }
})


//返回顶部
$('#clickicon').hide();
$(window).scroll(function(){
    if ($(this).scrollTop()>=208){
        $('#clickicon').fadeIn();
    }else{
        $('#clickicon').fadeOut();
    }
})
$('#clickicon').click(function(){
    $('html,body').animate({scrollTop:0},300);
})

//二级菜单
$('#navbar .nav .nav-left .hide').width($(document).width()).css('left',-$('#navbar .nav .nav-left').offset().left);
$('#navbar .nav .nav-left').hover(function(){
    $('.navbar .nav .nav-left .hide').css('height','226px');
},function(){
    $('.navbar .nav .nav-left .hide').css('height','0');
    $('#navbar .nav .nav-left .hide .hide-list').hide();
    $('#navbar .nav .nav-left .nav-ul li').removeClass('liactive');
    $('#navbar .nav .nav-left .nav-ul li a').css('color','#363636');
})

$('#navbar .nav .nav-left .nav-ul li').mouseenter(function(){
    var g = $(this).index();
    $('#navbar .nav .nav-left .hide .hide-list').eq(g).show().siblings('.hide-list').hide();
    $(this).addClass('liactive').siblings('li').removeClass('liactive');
    $(this).find('a').css('color','#1428a0').parent().siblings().find('a').css('color','#363636');
})
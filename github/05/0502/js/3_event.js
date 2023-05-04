$(document).ready(function(){
    console.log('ready - 문서의 DOM이 완성되면 실행되는 이벤트')
})
//압축버전
$(function(){
    console.log('방법2')
})

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOMContentLoaded - 문서의 DOM이 완성되면 실행되는 코드')
})
/*
(function() {
    console.log("js 방법2")
})
*/


//클릭하면 하나만 색이 변하는 코드
$('.hello').click(function(){
    $('.hello').css('color','red')
})

$('.num').click(function() {
    //$('.num').css('color','blue')
    $(this).css({'color':'blue', 'font-weight':'bold'})
})
//마우스 클릭 코드 this사용
$('.num').on('click',function(){
    $(this).css({'color':'yellow', 'font-weight':'bold'})
})

//마우스 오버 코드
$('.numbers').mouseleave(function(){
    $(this).css('background-color','white')
})
//마우스 오버 코드 (오늘의집 배너 이거로 하면 된다.)
$('.numbers').on('mouseover',function(){
    $(this).css('background-color','black')
})

//hover : 변화상태 확인, 사용처는 마우스 가져갔을 때 메뉴가 쭉 나오는걸 만들 수 있다.
$('.hover').hover(function(){
    //mouseover느낌
    $(this).css('color','red')
}, function(){
    //mouseleave느낌
    $(this).css('color','blue')
} )


//메뉴 숨김 기능 sub2
$('.menu1').hover(function(){
    $('.sub2').addClass('block')
    //$('sub1').css('display','block')
}, function(){
    //$('.sub1').css('display','none')
    $('.sub2').removeClass('block')
})

//메뉴 숨김 기능 sub1 - hover, toggler로 만듬
$('.menu1').hover(function(){
    $('.sub1').toggleClass('block')
})
//git full request 테스트 #dae
$(window).scroll(function(){

})
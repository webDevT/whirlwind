$(function(){
    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    })



});

$(function(){
	$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});


    $('.accordion__item-header').click(function(){
    $('.accordion__item').removeClass('active');
})
$('.accordion__item-header').click(function(){
    if ( $(this).next().is(":visible")){
    $(this).next().slideUp();
    $(this).parent().removeClass('active');
    }
    else{
    $('.accordion__item-text:visible').hide('slow');
    $(this).next().slideDown();
   $(this).parent().addClass('active');
 }
});

$('.accordion-black__item-header').click(function(){
    $('.accordion-black__item').removeClass('active');
})
$('.accordion-black__item-header').click(function(){
    if ( $(this).next().is(":visible")){
    $(this).next().slideUp();
    $(this).parent().removeClass('active');
    }
    else{
    $('.accordion-black__item-text:visible').hide('slow');
    $(this).next().slideDown();
   $(this).parent().addClass('active');
 }
});
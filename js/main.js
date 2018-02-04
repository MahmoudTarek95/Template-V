/*jslint plusplus: true, evil: true */
/*global $, window*/
$(function () {
    'use strict';
    
    $('html').niceScroll();
    
    $('.header').height($(window).height()); // header height
    
    $(window).scroll(function () {
        
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });

    var i;
    for (i = 2; i <= 8; i++) {
        $('.our-work .item-box').append('<div class="item"><div>');
    }
    
    $('.our-work .item-box div').each(function () {
       
        if ($(this).hasClass('item')) {
            $(this).html('<img src="">');
            $('.our-work .item-box .item img').eq(0).attr('src', 'imgs/work-2.jpg');
            $('.our-work .item-box .item img').eq(1).attr('src', 'imgs/work-3.jpg');
            $('.our-work .item-box .item img').eq(2).attr('src', 'imgs/work-4.jpg');
            $('.our-work .item-box .item img').eq(3).attr('src', 'imgs/work-5.jpg');
            $('.our-work .item-box .item img').eq(4).attr('src', 'imgs/work-6.jpg');
            $('.our-work .item-box .item img').eq(5).attr('src', 'imgs/work-7.jpg');
            $('.our-work .item-box .item img').eq(6).attr('src', 'imgs/work-8.jpg');
        }
        
    });

     
    if ($('.our-work .item-box div').hasClass('item')) {
        
        $('.item').append('<div class="over"><span class="first">project name</span><span class="last">website design</span></div>');
    }
    
    
    $('.our-work .over .first').on("mouseenter", function () {
       
        $(this).addClass('animated slideInDown');
        
    });
    $('.our-work .over .last').on("mouseenter", function () {
       
        $(this).addClass('animated slideInUp');
        
    });
    
});
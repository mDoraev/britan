    //<![CDATA[

requirejs(['jquery'], function(jQuery) {


    jQuery(function($) {


        // for home page
        if($('body').hasClass('cms-index-index')){
// slider
var leftBanner = $('.js-left-banner');
var slider = $('.slideshow-wrapper-additional');
var wrapper = $('.main-top-container');
wrapper.addClass('container');
slider.before(leftBanner);

var conditions = $('.js-conditions');
wrapper.append(conditions);
}

// header account links

// add icons for links in the header, add alt. button MY ACCOUNT

// $('.header-top-container .left-column ul li a').prepend($('.js-icon-hosp').html());
var iconIter = 1;
$('#header-account').find('a').each(function(){


    var that = $(this);
    // that.prepend($('.js-icon-hosp').html());

    var text = $.trim(that.text());
    var accountText = 'my account';
    var signInText = 'sign in';
    var createAccountText = 'create an account';
    text = text.toLowerCase();
    if(text == accountText){
// that.hide();
var url = that.attr('href');
console.log(url);
// that.after('<button class="js-btn-account">'+that.text()+'</button>');

// var but = $('.js-btn-account');
// but.prepend($('.js-icon-account').html());
// but.on('click', function(){
//     showAccountForm();
// })
    }
    if(text == createAccountText){
        that.hide();
    }
       if(text == signInText){
        that.hide();
    }
        if(that.css('display') !== 'none'){
    that.prepend($('.js-icon-header').filter('[data-range="'+iconIter+'"]').html());
    iconIter++;
}

});
setTimeout(function(){
    $('.header-primary-container .right-column').append($('#header-account'));
}, 5000);
// megamenu
var megamenuUL = $('#mainmenu>ul>li>.nav-panel');
var megamenuULclass = megamenuUL.attr('class');
megamenuUL.wrap('<div class="'+megamenuULclass+' abstract-wrap megamenu-wrap"></div');
var megamenuCont = $('.megamenu-wrap');
var megamenuAside = $('.megamenu-aside');
var megamenuBottom = $('.megamenu_bottom');
megamenuCont.append(megamenuAside);
megamenuCont.append(megamenuBottom);
// megamenu add link ALL
var megamenuULparent = $('.level0.nav-panel');
megamenuULparent.children('li.level1').each(function(){
var that = $(this);
var href = that.children('a').attr('href');
var length = that.children('ul.level1').children('li.level2').length;
if(length>3){
var newLink = '<a href="'+href+'" class="js-megamenu_link-all">View more('+length+')</a>';
that.append(newLink);
}

// that.append(href);
// that.append(length);
// console.log('href '+href);
// console.log('length '+length);
});

// footer
$('.page-footer .footer-container2').hide();
$('.page-footer').append('<div class="js-new-footer container"></div>');
var footerWrap = $('.js-new-footer');
footerWrap.append('<div class="js-new-footer_left"></div>');
footerWrap.append('<div class="js-new-footer_right"></div>');
var footerLeft = $('.js-new-footer_left');
var footerRight = $('.js-new-footer_right');
function addToFooterLeft(el){
    footerLeft.append('<div class="js-new-footer_box">');
    var footerLeftBox = $('.js-new-footer_left .js-new-footer_box:last-child');
footerLeftBox.append($(el));
}
function addToFooterRight(el){
    footerRight.append('<div class="js-new-footer_box">');
    var footerRightBox = $('.js-new-footer_right .js-new-footer_box:last-child');
footerRightBox.append($(el));
}
function abstractWrap(el){
$(el).wrap('<div class="abstract-wrap"></div>');
}
// addToFooterRight('.page-footer .grid12-3:last-child .mobile-collapsible');
addToFooterRight('.page-footer .bullet');
addToFooterRight('.page-footer #newsletter-validate-detail');
$('.js-new-footer #newsletter-validate-detail').parent().append('<small>No spam ever. Just Monthly updates and insights.</small>')

addToFooterLeft('.js-img-pay');
addToFooterLeft('.page-footer .social-links');
addToFooterLeft('.footer-bottom-container .item-left');
var imgPay = $('.js-new-footer .js-img-pay');
abstractWrap(imgPay);
imgPay.parent().prepend('<h6 class="block-title heading">Payment options</h6>');
$('.js-new-footer .bullet').parent().prepend('<h6 class="block-title heading">Information</h6>');
// footerLeft.find('.item-right').parent().prepend('<h6 class="block-title heading">Payment options</h6>');
// submit button styleS
var svgBtnHtml = '<svg id="svg-email" width="20px" viewBox="0 0 22 22" "><title>send-email-2</title><path d="M1.364 3.494a1.364 1.364 0 0 1 1.793-1.89l17.286 8.782a.682.682 0 0 1 0 1.216L3.157 20.395a1.364 1.364 0 0 1-1.793-1.89l4.598-7.51-4.598-7.5zm19.45 7.5H5.958" stroke="#020134" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
var footerBtn = $('#newsletter-validate-detail button');
footerBtn.html(svgBtnHtml);
// social-links
var svgFacebook = '<svg id="svg-facebook" viewBox="0 0 28 28" width="30px"><path d="M26.8 0H1.2C.5 0 0 .5 0 1.2v25.7c0 .6.5 1.1 1.2 1.1h13.7V16.9h-3.8v-4.1h3.8v-3c0-3.6 2.2-5.6 5.4-5.6 1.5 0 2.9.1 3.3.2v3.8h-2.2c-1.8 0-2.1.8-2.1 2.1v2.6h4.1l-.6 4.1h-3.5v11h7.6c.6 0 1.2-.5 1.2-1.2V1.2C28 .5 27.5 0 26.8 0z"></path></svg>';



var facebookLink = $('.js-new-footer .ic-facebook');

facebookLink.html(svgFacebook);

// FAQ
if($('body').hasClass('kbase-category-view')){

$('.kbase-category-view h1').after('<div class="js-faq_img-links"></div>');
var faqLinks = $('.js-faq_img-links');
for(i=1; i<=5; i++){
    var $img = document.querySelector('.js-img-faq img:nth-child('+i+')');
    var img = $img.outerHTML;

    faqLinks.append('<a href = "#'+$img.getAttribute('alt')+'" class="js__link">'+img+'</a>');
}
$('.kb-category__grid').find('h2').each(function(){
var that = $(this);
var text = $.trim(that.text());
var img = $('.js-img-faq').children('img[alt="'+text+'"]').clone();
that.before(img);
that.before('<a name="'+text+'"></a>');

})

}

if($('body').hasClass('customer-account-login')){
    var parent = $('.actions-toolbar');
var loginBtn = $('button.action.login.primary');
var secondary = $('.block-customer-login .secondary');
loginBtn.parent().before(secondary);
parent.addClass('show');


}
if($('body').hasClass('customer-account-create')){
var selectG = $('#gender');
var absrtactG = $('.gender-btn-cont');
selectG.after('<div class="abstract-wrap gender-btn-wrap"></div>');
var parentBtnG = $('.gender-btn-wrap');
parentBtnG.html(absrtactG);

var btnMale = parentBtnG.find('.gender-btn-cont__male');
var btnFemale = parentBtnG.find('.gender-btn-cont__female');

function selectGender(el, num){
        thatBtnG = $(el);
        $('.gender-btn').removeClass('gender-btn-active');
    thatBtnG.addClass('gender-btn-active');
selectG.val(num);
}
btnMale.on('click', function (){
    selectGender(this, 1);

})


btnFemale.on('click', function(){
    selectGender(this, 2);

    
})




}


    });
    });


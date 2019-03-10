$(document).ready(function(){
    var priceList = '';
    var eachPrice = $('.each-price');
    var summarPrice = $('.sumary-price');
    var summary = 0;
    $('.product-item').each(function(){
        $(this).click(function(e){
            e.preventDefault();
            var priceCount = $(this).find('.product-price').text();
            priceList+= "/" + priceCount + '\n';
            eachPrice.text(priceList.substr(1));
            summary+=Number(priceCount.substr(0,priceCount.length-1));
            summarPrice.text(summary + '$');
        })
    })
    
})
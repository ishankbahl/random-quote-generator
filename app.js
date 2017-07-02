$(document).ready(function(){
    $("#newQuote").on("click",change);
    function change(){
        var htmlQuote,quoteText,quoteAuthor,color,url;
        $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",function(json){
            quoteAuthor=JSON.stringify(json.quoteAuthor);
            quoteAuthor=quoteAuthor.slice(1,-1);
            quoteText=JSON.stringify(json.quoteText);
            url='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+quoteText+" "+quoteAuthor;
            quoteText=quoteText.slice(1,-1);
            htmlQuote="<i class='fa fa-quote-left' aria-hidden='true'>"+" "+quoteText+" "+"<i class='fa fa-quote-right' aria-hidden='true'></i>";
            color=getRandomColor();
            $(".link").attr('href',url);
            $(".quoteText").animate({
               opacity:0
            },
            500,
            function(){
                $(".quoteText").animate({
                    opacity:1
                },500);
                $(".quoteText").html(htmlQuote);
            });
            $(".blockquote-footer").animate({
               opacity:0
            },
            500,
            function(){
                $(".blockquote-footer").animate({
                    opacity:1
                },500);
                $(".blockquote-footer").text(quoteAuthor);
            });
            $(".sameColor").animate({backgroundColor:color},1000);
            $(".sameColor1").animate({color:color},1000);
        });
    }
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
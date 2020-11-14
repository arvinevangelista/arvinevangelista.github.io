$().ready(function(){

$('.feature-box').hover(
    function(){
        $(this).find('h4').css('color' , '#ffc576');
        
    },


    function(){
        $(this).find('h4').css('color' , 'white');
        
    }
);


$('.social-box').hover(
    function(){
        $(this).find('.social-title').css('color', '#303030');
        $(this).find('i').css('color', '#303030');
        $(this).find('a').css('color', '#303030');
        $(this).attr('style','background-color:#ffc576');
        
       


},

function(){
    $(this).find('.social-title').css('color' , 'white');
    $(this).find('i').css('color', '#ffc576');
    $(this).find('a').css('color', '#ffc576');
    $(this).removeAttr('style');
}

);



console.log("ready");

});
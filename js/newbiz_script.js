$(document).ready(function(){
   
    
    $('.header ul li a').click(function(e){
      e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top +5
        },1000);
    });
    
    $(window).scroll(function(){
        $('.block').each(function(){
            if($(window).scrollTop() > $(this).offset().top){
                $('.header ul li a').removeClass('active');
               var bl =$(this).attr('id');
                $('.header ul li a[data-scroll="' + bl + '"]').addClass('active');
            }
        });
    });
    
    $(window).scroll(function(){

         if($(window).scrollTop() >=500){
             
                  $('#scrolltop').addClass('topactive');
             }else{
                  $('#scrolltop').removeClass('topactive');
         }
         
        
    });
    $('#scrolltop').click(function(ev){
            ev.preventDefault();
            $('html , body').animate({
            scrollTop: 0
        },1000);
        })
    /////////popup//////////
    $(".popupclick").click(function(pc){
        $('.popup').fadeIn();
    });
    $('.exit').click(function(){
        $('.popup').fadeOut();
    });
    $('.popup').click(function(){
        $(this).fadeOut();
    });
    $('.popup .inner').click(function(po){
        po.stopPropagation();
    });
    $(document).keydown(function(kd){
        if(kd.keyCode == 27){
           $('.popup').fadeOut(); 
        }
    });
    
    //////////animate ///
    $('.intro .text .get').hover(function(){
        $(this).find('span').eq(0).animate({
          width:'100%'  
        },300)
    },function(){
         $(this).find('span').eq(0).animate({
          width:'0'  
        },300)
    } )
    
});






var myAll =document.getElementById('all');
var myApp =document.getElementById('app');
var myWeb =document.getElementById('web');
var myCard =document.getElementById('card');
var allnone =document.getElementById('prtfl');
var appnone =document.getElementById('prtfla');
var webnone =document.getElementById('prtflw');
var cardnone =document.getElementById('prtflc');
function funcall(){
    myAll.classList.add('active');
    myWeb.classList.remove('active');   
    myApp.classList.remove('active');   
    myCard.classList.remove('active'); 
     allnone.style.display="block";
    cardnone.style.display="none";
    webnone.style.display="none";
    appnone.style.display="none";
}
function funcapp(){
    myApp.classList.add('active');
    myAll.classList.remove('active');
    myWeb.classList.remove('active');   
    myCard.classList.remove('active');
    allnone.style.display="none";
    cardnone.style.display="none";
    webnone.style.display="none";
    appnone.style.display="block";

}
function funcweb(){
    myWeb.classList.add('active');
    myAll.classList.remove('active');   
    myApp.classList.remove('active');   
    myCard.classList.remove('active'); 
    allnone.style.display="none";
    cardnone.style.display="none";
    webnone.style.display="block";
    appnone.style.display="none";
}
function funccard(){
    myCard.classList.add('active');
    myAll.classList.remove('active');   
    myApp.classList.remove('active');   
    myWeb.classList.remove('active'); 
    allnone.style.display="none";
    cardnone.style.display="block";
    webnone.style.display="none";
    appnone.style.display="none";
}
 if(allnone.classList.contains('active')){
    cardnone.style.display="none";
    webnone.style.display="none";
    appnone.style.display="none"; 
 }

var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("saul");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
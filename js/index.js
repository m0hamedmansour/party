/// <reference types="../@types/jquery" />
$('a[href^="#"]').on('click',function(e){
    let ahref =e.target.getAttribute('href');
    let secction=$(ahref).offset().top;
    $('body , html').animate({scrollTop:secction},2000 )
})

$('#cli').on('click',function(){
$('#blackslide').animate({width:'show'},2000)
})

$('#clos').on('click',function(){
    $('#blackslide').animate({width:'hide'},1000)
})

$('#btn1').on('click',function(){
    $('.div1').animate({height:'toggle'},1000)
})

$('#btn2').on('click',function(){
    $('.div2').animate({height:'toggle'},1000)
})

$('#btn3').on('click',function(){
    $('.div3').animate({height:'toggle'},1000)
})

$('#btn4').on('click',function(){
            $('.div4').animate({height:'toggle'},1000)
})

$('textarea').keyup(function(){
    let mylenght=$(this).val().length;
    $('#num').text(
        100-mylenght <= 0 ? "finshed": 100-mylenght
    )
})

let countdate = new Date("Dec 31 , 2023 23:59:59").getTime();
let counter =setInterval(() => {
    let datedown = new Date().getTime();
    let datediff = -countdate + datedown;
    let dayes= Math.floor(datediff  /(1000*60*60*24));
    let hours= Math.floor((datediff  %(1000*60*60*24)) / (1000*60*60));
    let minus= Math.floor((datediff  %(1000*60*60))/(1000*60));
    let secon= Math.floor((datediff  %(1000*60))/1000);
// alert(secon)
 document.getElementById("count4").innerHTML=secon + " s";
 document.getElementById("count3").innerHTML=minus +" min";
 document.getElementById("count2").innerHTML=hours + "h";
 document.getElementById("count1").innerHTML=dayes +" D";
})

// $('a[href="#"]').on('click',function(e){
// let ahref= e.target.getAttribute('href')
// let sec=$(ahref).offset().top;
//   $('body').animate( {scrollTop:'500'} ,5000);
// })


//var myLi = document.getElementsByTagName("h1")[0].style.color="blue";
//console.log(myLi);  

    /*var a=document.getElementById("test");
    a.addEventListener("click",function(){
        this.style.color="red";
        console.log("test");
    });*/


     

    
//function changemycolor
/*function Changecolor(event)
{ 
    event.preventDefault();
var gettext=document.getElementById("test");
console.log("hhhhhh");
if ( gettext.style.color=="black")
{
    gettext.style.color="red";
}
else
{
  gettext.style.color="black";
}
}*/
function bold(event)
{
event.preventDefault();
var text=document.getElementById("textarea");

console.log(text.style.fontWeight);
if(text.style.fontWeight=="bold")
{
    text.style.fontWeight="normal";
}
else{
    text.style.fontWeight="bold";
}
}
function italic(event)
{
event.preventDefault();
var itl=document.getElementById("textarea");
console.log(itl.style.fontStyle);
if(itl.style.fontStyle=="italic")
{
    itl.style.fontStyle="normal";
}
else{
    itl.style.fontStyle="italic";
}
}
function lines()
{

var line=document.getElementById("textarea");
console.log(line.style.textDecoration);
if(line.style.textDecoration=="underline")
{
    line.style.textDecoration="none";
}
else{
    line.style.textDecoration="underline";
}
}
function police()
{
    var texte=document.getElementById("textarea");
    var size=document.getElementById("select").value;
    texte.style.fontSize=size;
    console.log(texte.style.fontSize);
}
function policetyp()
{
    var texte=document.getElementById("textarea");
    var font=document.getElementById("select11").value;
    texte.style.fontFamily=font;
    console.log(texte.style.fontFamily);
}

$(document).ready(function(){
    $(".detailes").click(function(){
      $("#dep").slideToggle();
    });
  });
  $(document).ready(function(){
    $(".col1").mouseenter(function(){
      $(".col1").css("background-color", "yellow");
    });
    $(".col1").mouseleave(function(){
        $(".col1").css("background-color", "transparent");
      });
  });
  $(document).ready(function(){
    $(".col1").dblclick(function(){
      $("#sea").fadeIn(1000);
      $("#sea").fadeOut(2000);
      $("#sea").css("display","flex");
    });
   
  });


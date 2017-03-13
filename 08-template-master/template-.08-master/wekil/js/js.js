
document.querySelector('.slider').style.backgroundImage="url(images/slide1_bg.jpg)"
 wekiller=[
 "images/slide1_bg.jpg",
 "images/slide2_bg.jpg",
 "images/slide3_bg.jpg"]
 

function salam(obj){
	obj.addEventListener("mousedown",function(){
		obj.style.border="4px solid white"
	})
	obj.addEventListener("mouseout",function(){
		obj.style.border=""
	})
	
	a=obj.getAttribute('src');
	b=document.querySelector('.slider');
	b.style.backgroundImage="url("+a+")";
	b.style.backgroundRepeat="no-repeat"
	b.style.backgroundSize="cover"
z

}
a=document.querySelector(".inputsearch")
a.addEventListener("click",function(){a.style.width="200px"})
a.addEventListener("focusout",function(){a.style.width="50px"})
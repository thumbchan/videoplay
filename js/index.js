
var play=document.getElementById("play");
var video=document.getElementById("myVideo")



var onoff=true;
play.onclick=function(){
	if(onoff){
		video.play();
		this.style.backgroundPosition="-414px -123px";
//		onoff=0;
	}else{
		video.pause();
		this.style.backgroundPosition="-252px -123px";
//		onoff=1;
	}	
	onoff=!onoff;//取反	
}




















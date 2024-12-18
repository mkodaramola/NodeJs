$(document).ready(function(){




		var snake = document.getElementById('sbody');
var x=0;
var y=0;
var up = false;
var dp = false;
var lp = false;
var rp = true;
var wd = 100;
var ht = 10;

document.querySelector('body').addEventListener('load',HortShape);

function move(){



	if(up == true){
		if(y <= 0) y=0;
		else {
			y--;
		}

		snake.style.width = '10px';
		snake.style.height = '100px';

	}
	else if(dp == true){
		if(y >= 90) y=90;
		else {
			y++;
		}

		snake.style.width = '10px';
		snake.style.height = '100px';
	}
	else if(lp == true){
		if(x <= 0) x=0;
		else {
			x--;
		}

		HortShape();
	}
	else if(rp == true){
		if(x >= 90) x=90;
		else {
			x++;
		}
		HortShape();
	}

	// if (up == true || dp == true) {
	// 	snake.style.width = '10px';
	// 	snake.style.height = '100px';
	// }else{
	// 	snake.style.width = '100px';
	// 	snake.style.height = '10px';
	// }

	var csst = "left: "+x + "%; top: "+y + "%;";
 		
	snake.style.cssText = csst;

	var nsnk= "left:"+ (x-30) + "%; top: "+y + "%;";

	$('.container').append($("<div></div>").style.cssText = nsnk);



}


	function vertShape(){
			snake.style.cssText = "width:"+10+"px; height:"+100+"px;";
	}
	function HortShape(){
			snake.style.cssText = "width:"+100+"px; height:"+10+"px;";
	}




	document.querySelector("body").addEventListener("keydown",sh);

 function sh(e){
           if(e.keyCode == 38) {
                up = true;
                dp = false;
                lp = false;
                rp = false; 


           }
           else if(e.keyCode  == 40){
               	up = false;
                dp = true;
                lp = false;
                rp = false; 
           }
           else if(e.keyCode  == 37){
            	up = false;
                dp = false;
                lp = true;
                rp = false; 
           }
           else if(e.keyCode  == 39){
            	up = false;
                dp = false;
                lp = false;
                rp = true; 
           }

        }


var timer = setInterval(move,100);






});
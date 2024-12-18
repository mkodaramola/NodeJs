var p1N="";
var p2N="";
var played = false;
var cplayed = false;

		function gotoGame(){
			p1N = document.getElementById("p1Name").value;
			localStorage.setItem("p1N",p1N);
			if(document.getElementById('p2sel').value == "p2"){
				p2N = document.getElementById("p2Name").value;
				localStorage.setItem("p2N",p2N);

			}
			else {
				p2N = "Computer";
				localStorage.setItem("p2N","Computer");

			}


		}
		function unedit11(){
			
			document.getElementById('11').setAttribute('readonly',true);

			}
			function unedit12(){
			
			document.getElementById('12').setAttribute('readonly',true);

			}
			function unedit13(){
			
			document.getElementById('13').setAttribute('readonly',true);

			}
			function unedit21(){
			
			document.getElementById('21').setAttribute('readonly',true);

			}
			function unedit22(){
			
			document.getElementById('22').setAttribute('readonly',true);

			}
			function unedit23(){
			
			document.getElementById('23').setAttribute('readonly',true);

			}
			function unedit31(){
			
			document.getElementById('31').setAttribute('readonly',true);

			}
			function unedit32(){
			
			document.getElementById('33').setAttribute('readonly',true);

			}
			function unedit33(){
			
			document.getElementById('33').setAttribute('readonly',true);

			}


			function edit(){
			
			document.getElementById('11').removeAttribute('readonly',true);

			}
		function setStart(){

			document.getElementById('p1Side').innerHTML = localStorage.getItem("p1N");
			document.getElementById('p2Side').innerHTML = localStorage.getItem("p2N");

		}
		
		function ShowP2Name(){
			var val = document.getElementById('p2sel').value;
			if(val == "comp") {
				document.getElementById('p2nm').style.visibility = "hidden";
				document.getElementById('compBut').style.visibility = "visible";
				document.getElementById('playerBut').style.visibility = "hidden";
			}
			else{	
				document.getElementById('p2nm').style.visibility = "visible";
				document.getElementById('compBut').style.visibility = "hidden";
				document.getElementById('playerBut').style.visibility = "visible";
			}
		}

		function checkWin(){

			var b11 = document.getElementById('11').value;
			var b12 = document.getElementById('12').value;
			var b13 = document.getElementById('13').value;

			var b21 = document.getElementById('21').value;
			var b22 = document.getElementById('22').value;
			var b23 = document.getElementById('23').value;

			var b31 = document.getElementById('31').value;
			var b32 = document.getElementById('32').value;
			var b33 = document.getElementById('33').value;

			if (b11 == b12 && b12 == b13 && b11 != ""){
				if(b11 == "X") alert(localStorage.getItem("p1N") + " Wins");
				else
					alert(localStorage.getItem("p2N") + " Wins");
			}
			else if(b11 == b21 && b21 == b31 && b11 != ""){
				if(b11 == "X") alert(localStorage.getItem("p1N") + " Wins");
				else
					alert(localStorage.getItem("p2N") + " Wins");
			}
			else if(b13 == b23 && b23 == b33 && b13 != ""){
				if(b13 == "X") alert(localStorage.getItem("p1N") + " Wins");
				else
					alert(localStorage.getItem("p2N") + " Wins");
			}
			else if(b31 == b32 && b32 == b33 && b31 != ""){
				if(b31 == "X") alert(localStorage.getItem("p1N") + " Wins");
				else
					alert(localStorage.getItem("p2N") + " Wins");
			}
			else if(b11 == b22 && b22 == b33 && b11 != ""){
				if(b11 == "X") alert(localStorage.getItem("p1N") + " Wins");
				else
					alert(localStorage.getItem("p2N") + " Wins");
			}
			else if(b31 == b22 && b22 == b13 && b31 != ""){
				if(b31 == "X") alert(localStorage.getItem("p1N") + " Wins");
				else
					alert(localStorage.getItem("p2N") + " Wins");
			}
			else if(b21 == b22 && b22 == b23 && b21 != ""){
				if(b21 == "X") alert(localStorage.getItem("p1N") + " Wins");
				else
					alert(localStorage.getItem("p2N") + " Wins");
			}

		}
		function BoldCase (id){

			var data = document.getElementById(id).value;
			document.getElementById(id).value = data.toUpperCase();
			document.getElementById(id).style.fontWeight="bold";

		}
		
		var sArr = [];
		function shuffle(){
			var arr = [1,2,3,4,5,6,7,8,9];
			for (var i = arr.length - 1; i > 0; i--) {
				
				var j = Math.floor(Math.random() * (i+1));
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}

			sArr = arr; 

		}
		var boxfilled=0;
		function box1(){
			boxfilled = 1;
			CTC();
		if( CTC() == false){x
			CAW("11","12","13");
			CAW("11","22","33");
			lCAW("11","21","31");

			}
			
		}
		function box2(){
			boxfilled = 2;
		CTC();
		if( CTC() == false){
			CAW("11","12","13");
			lCAW("12","22","32");
			}
		}
		function box3(){
			boxfilled = 3;
		CTC();
		if ( CTC() == false) {	CAW("11","12","13");
			CAW("13","22","31");
			lCAW("13","23","33");
			}
		}
		function box4(){
			boxfilled = 4;
			CTC();
		if( CTC() == false)	{
			CAW("11","21","31");
			lCAW("21","22","33");

			}

		}
		function box5(){
			boxfilled = 5;
			CTC();
			if(CTC() == false){

				CAW("21","22","23");
				CAW("12","22","32");
				CAW("31","22","13");
				lCAW("11","22","33");}
		}
		function box6(){
			boxfilled = 6;
			CTC();
		if(CTC() == false)	{

			CAW("11","23","33");
			lCAW("21","22","23");

			}
		}
		function box7(){
			boxfilled = 7;
		CTC();	
		if(CTC() == false){

			CAW("31","32","33");
					CAW("31","22","13");
					lCAW("11","21","31");
				}
			}
		function box8(){
			boxfilled = 8;
		CTC();	
		if(CTC() == false)	{
			
			CAW("31","32","33");
			lCAW("12","22","32");

			}

		}
		function box9(){
			boxfilled = 9;
		CTC();
		if(CTC() == false){	
			CAW("31","32","33");
			CAW("13","23","33");
			lCAW("11","22","33");
				}
		}
		
		function CAW(bx1,bx2,bx3){
			var v1 = document.getElementById(bx1).value;
			var v2 = document.getElementById(bx2).value;
			var v3 = document.getElementById(bx3).value;

		//	alert("v1:"+v1 + "  v2:" + v2 + "  v3:" + v3);

		if(played == false){	
			if(v1 === "X" && v2 === "X" && v3 === ""){
							document.getElementById(bx3).value = "O";
							played = true;
						}
						else if(v1 === "X" && v2 === "" && v3 === "X"){
							document.getElementById(bx2).value = "O";
							played = true; 
						}
						else if(v1 === "" && v2 === "X" && v3 === "X"){
							document.getElementById(bx1).value = "O";
							played = true;
						}
			
			}
		}
		function lCAW(bx1,bx2,bx3){
			var v1 = document.getElementById(bx1).value;
			var v2 = document.getElementById(bx2).value;
			var v3 = document.getElementById(bx3).value;


			if(played ==false){  

					 if(v1 === "X" && v2 === "X" && v3 === ""){
							document.getElementById(bx3).value = "O";
							played = true; 
						}
						else if(v1 === "X" && v2 === "" && v3 === "X"){
							document.getElementById(bx2).value = "O";
							played = true;
						}
						else if(v1 === "" && v2 === "X" && v3 === "X"){
							document.getElementById(bx1).value = "O";
							played = true;
						}
						else{
						
					}
						
						if(played === false) {

							playRand();
							
						}
			}

			played = false;
		}






		function playRand(){
			

			var arr = sArr;	
		if(arr.length !== 0){

			for (var i = arr.length - 1; i > 0; i--){

				if(arr[i] === boxfilled){
					arr.splice(i,1);
						break;
				}

			}
			var boxId = "";
			if(arr[0] == 1) {boxId = "11";}
			if(arr[0] == 2) {boxId = "12";}
			if(arr[0] == 3) {boxId = "13";}
			if(arr[0] == 4) {boxId = "21";}
			if(arr[0] == 5) {boxId = "22";}
			if(arr[0] == 6) {boxId = "23";}
			if(arr[0] == 7) {boxId = "31";}
			if(arr[0] == 8) {boxId = "32";}
			if(arr[0] == 9) {boxId = "33";}
	
			if(document.getElementById(boxId).value == "X" || document.getElementById(boxId).value == "x"){
				
			}
			else {
				document.getElementById(boxId).value = "O";
			}

			
			document.getElementById(boxId).setAttribute('readonly',true);
			arr.shift();
		}


		}

			
		function CTC(){
			played = false;
			var v1 = document.getElementById("11").value;
			var v2 = document.getElementById("12").value;
			var v3 = document.getElementById("13").value;

			var v4 = document.getElementById("21").value;
			var v5 = document.getElementById("22").value;
			var v6 = document.getElementById("23").value;

			var v7 = document.getElementById("31").value;
			var v8 = document.getElementById("32").value;
			var v9 = document.getElementById("33").value;


			if(v1 === "O" && v2 === "O" && v3 === ""){
							document.getElementById("13").value = "O";

							played = true; 
						}
						else if(v1 === "O" && v2 === "" && v3 === "O"){
							document.getElementById("12").value = "O";
						
							played = true;
						}
						else if(v1 === "" && v2 === "O" && v3 === "O"){
							document.getElementById("11").value = "O";
							played = true;
						}


						else if(v4 === "O" && v5 === "" && v6 === "O"){
							document.getElementById("22").value = "O";
							played = true;
						}
						else if(v4 === "" && v5 === "O" && v6 === "O"){
							document.getElementById("21").value = "O";
							played = true;
						}
						else if(v4 === "O" && v5 === "O" && v6 === ""){
							document.getElementById("23").value = "O";
							played = true;
						}


						else if(v7 === "" && v8 === "O" && v9 === "O"){
							document.getElementById("31").value = "O";
							played = true;
						}
						else if(v7 === "O" && v8 === "" && v9 === "O"){
							document.getElementById("32").value = "O";
							played = true;
						}
						else if(v7 === "O" && v8 === "O" && v9 === ""){
							document.getElementById("33").value = "O";
							played = true;
						}

						else if(v1 === "" && v4 === "O" && v7 === "O"){
							document.getElementById("11").value = "O";
							played = true;
						}
						else if(v1 === "O" && v4 === "" && v7 === "O"){
							document.getElementById("21").value = "O";
							played = true;
						}
						else if(v1 === "O" && v4 === "O" && v7 === ""){
							document.getElementById("31").value = "O";
							played = true;
						}


						else if(v2 === "" && v5 === "O" && v8 === "O"){
							document.getElementById("12").value = "O";
							played = true;
						}
						else if(v2 === "O" && v5 === "" && v8 === "O"){
							document.getElementById("22").value = "O";
							played = true;
						}
						else if(v2 === "O" && v5 === "O" && v8 === ""){
							document.getElementById("32").value = "O";
							played = true;
						}


						else if(v3 === "" && v6 === "O" && v9 === "O"){
							document.getElementById("13").value = "O";
							played = true;
						}
						else if(v3 === "O" && v6 === "" && v9 === "O"){
							document.getElementById("23").value = "O";
							played = true;
						}
						else if(v3 === "O" && v6 === "O" && v9 === ""){
							document.getElementById("33").value = "O";
							played = true;
						}

						else if(v1 === "" && v5 === "O" && v9 === "O"){
							document.getElementById("11").value = "O";
							played = true;
						}
						else if(v1 === "O" && v5 === "" && v9 === "O"){
							document.getElementById("22").value = "O";
							played = true;
						}
						else if(v1 === "O" && v5 === "O" && v9 === ""){
							document.getElementById("33").value = "O";
							played = true;
						}

						else if(v7 === "" && v5 === "O" && v3 === "O"){
							document.getElementById("31").value = "O";
							played = true;
						}
						else if(v7 === "O" && v5 === "" && v3 === "O"){
							document.getElementById("22").value = "O";
							played = true;
						}
						else if(v7 === "O" && v5 === "O" && v3 === ""){
							document.getElementById("13").value = "O";
							played = true;
						}

						cplayed = true;

						return played;
		}
	
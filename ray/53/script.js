let ansOne = document.getElementById("text1").value = '';
let ansTwo = document.getElementById("text2").value = '';
let ansThree = document.getElementById("text3").value = '';
let ansFour = document.getElementById("text4").value = '';

function myFunc(){
    ansOne = document.getElementById("text1").value;
    ansTwo = document.getElementById("text2").value;
    ansThree = document.getElementById("text3").value;
    ansFour = document.getElementById("text4").value;
}

//conversion functions declaration
const formulaKelvinToCelcius = (i) =>{
    let result = parseInt(i-273.15);
    return result;
}
const formulaCelciusToKelvin = (i) =>{
     let result2 = parseInt(i+273.15);
     return result2;
}

//check function  imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png
const check = () =>{
    if(ansOne == formulaCelciusToKelvin(53)){
	  document.getElementById("imgstatus1").src="imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus1").style.visibility="visible";
    }else{
        document.getElementById("imgstatus1").src="imgs/sorry.png";
        document.getElementById("imgstatus1").style.visibility="visible";
    }
    if(ansTwo == formulaKelvinToCelcius(350)){
	  document.getElementById("imgstatus2").src="imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus2").style.visibility="visible";
    }else{
        document.getElementById("imgstatus2").src="imgs/sorry.png";
        document.getElementById("imgstatus2").style.visibility="visible";
    }
    if(ansThree == formulaKelvinToCelcius(370)){
        document.getElementById("imgstatus3").src="imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus3").style.visibility="visible";
    }else{
        document.getElementById("imgstatus3").src="imgs/sorry.png";
        document.getElementById("imgstatus3").style.visibility="visible";
    }
    if(ansFour == formulaCelciusToKelvin(27)){
        document.getElementById("imgstatus4").src="imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus4").style.visibility="visible";
    }else{
        document.getElementById("imgstatus4").src="imgs/sorry.png";
        document.getElementById("imgstatus4").style.visibility="visible";
    }
}



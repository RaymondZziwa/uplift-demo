
//variable declarations
let degKelvins=[48,-83,34,2023];
let degCelcius=[30,83,64,2024];
let convertedKelvins = [];
let convertedCelcius = [];
let celciusInput = [];
let kelvinInput = [];
let ans = parseInt(48 - 273.15);
let ansK = document.getElementById("text1").value = '';
let ansK2 = document.getElementById("text2").value = '';
let ansK3 = document.getElementById("text3").value = '';
let ansK4 = document.getElementById("text4").value = '';

let ansC = document.getElementById("text5").value = '';
let ansC2 = document.getElementById("text6").value = '';
let ansC3 = document.getElementById("text7").value = '';
let ansC4 = document.getElementById("text8").value = '';
function myFunc(){
    ansK = document.getElementById("text1").value;
    ansK2 = document.getElementById("text2").value;
    ansK3 = document.getElementById("text3").value;
    ansK4 = document.getElementById("text4").value;
    celciusInput.push(ansK) && celciusInput.push(ansK2)&& celciusInput.push(ansK3)&& celciusInput.push(ansK4);

}
function myFunc2(){
    ansC = document.getElementById("text5").value;
    ansC2 = document.getElementById("text6").value;
    ansC3 = document.getElementById("text7").value;
    ansC4 = document.getElementById("text8").value;
    kelvinInput.push(ansC) && kelvinInput.push(ansC2)&& kelvinInput.push(ansC3)&& kelvinInput.push(ansC4);
}

celciusInput.splice(0,celciusInput.length);
convertedKelvins.splice(0,convertedKelvins.length);
convertedCelcius.splice(0,convertedCelcius.length);
kelvinInput.splice(0,kelvinInput.length);
//conversion functions declaration
const formulaKelvinToCelcius = (i) =>{
    let result = parseInt(i-273.15);
    convertedKelvins.push(Math.round(result));
}
const formulaCelciusToKelvin = (i) =>{
    let result2 = parseInt(i+273.15);
    convertedCelcius.push(Math.round(result2));
}

//looping through the arrays while doing the conversions
for(i = 0;i<degKelvins.length;i++){
    formulaKelvinToCelcius(degKelvins[i]);
}
for(i = 0;i<degCelcius.length;i++){
    formulaCelciusToKelvin(degCelcius[i]);
}

console.log(convertedCelcius);
console.log(convertedKelvins);
 let check = () => {    
    if(celciusInput[0] == convertedKelvins[0] ||celciusInput[12] == convertedKelvins[0] ){
        document.getElementById("imgstatus1").src="imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus1").style.visibility="visible";
    }else{
        document.getElementById("imgstatus1").src="imgs/sorry.png";
        document.getElementById("imgstatus1").style.visibility="visible";
    }

    if(celciusInput[1] == convertedKelvins[1] ||celciusInput[13] == convertedKelvins[1] ){
        document.getElementById("imgstatus2").src="imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus2").style.visibility="visible";
    }else{
        document.getElementById("imgstatus2").src="imgs/sorry.png";
        document.getElementById("imgstatus2").style.visibility="visible";
    }
    if(celciusInput[2] == convertedKelvins[2] ||celciusInput[14] == convertedKelvins[2] ){
        document.getElementById("imgstatus3").src="imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus3").style.visibility="visible";
    }else{
        document.getElementById("imgstatus3").src="imgs/sorry.png";
        document.getElementById("imgstatus3").style.visibility="visible";
    }
    if(celciusInput[3] == convertedKelvins[3] ||celciusInput[15] == convertedKelvins[3] ){
        document.getElementById("imgstatus4").src="imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus4").style.visibility="visible";
    }else{
        document.getElementById("imgstatus4").src="imgs/sorry.png";
        document.getElementById("imgstatus4").style.visibility="visible";
    }

    
    //celcius to kelvins
    if(kelvinInput[0] == convertedKelvins[0] ||kelvinInput[12] == convertedCelcius[0] ){
        document.getElementById("imgstatus5").src="imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus5").style.visibility="visible";
    }else{
        document.getElementById("imgstatus5").src="imgs/sorry.png";
        document.getElementById("imgstatus5").style.visibility="visible";
    }

    if(kelvinInput[1] == convertedKelvins[1] ||kelvinInput[13] == convertedCelcius[1] ){
        document.getElementById("imgstatus6").src="imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus6").style.visibility="visible";
    }else{
        document.getElementById("imgstatus6").src="imgs/sorry.png";
        document.getElementById("imgstatus6").style.visibility="visible";
    }
    if(kelvinInput[2] == convertedKelvins[2] ||kelvinInput[14] == convertedCelcius[2] ){
        document.getElementById("imgstatus7").src="imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus7").style.visibility="visible";
    }else{
        document.getElementById("imgstatus7").src="imgs/sorry.png";
        document.getElementById("imgstatus7").style.visibility="visible";
    }
    if(kelvinInput[3] == convertedKelvins[3] ||kelvinInput[15] == convertedCelcius[3] ){
        document.getElementById("imgstatus8").src="imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus8").style.visibility="visible";
    }else{
        document.getElementById("imgstatus8").src="imgs/sorry.png";
        document.getElementById("imgstatus8").style.visibility="visible";
    }

 }
/*
 const reset = () => {
    ansK = document.getElementById("text1").value = '';
    ansK2 = document.getElementById("text2").value = '';
    ansK3 = document.getElementById("text3").value = '';
    ansK4 = document.getElementById("text4").value = '';

    ansC = document.getElementById("text5").value = '';
    ansC2 = document.getElementById("text6").value = '';
    ansC3 = document.getElementById("text7").value = '';
    ansC4 = document.getElementById("text8").value = '';

  
    document.getElementById("imgstatus5").style.visibility="hidden";
    document.getElementById("imgstatus6").style.visibility="hidden";
    document.getElementById("imgstatus7").style.visibility="hidden";
    document.getElementById("imgstatus8").style.visibility="hidden";
 }

 const resetFirst = () => {
    document.getElementById("imgstatus1").style.visibility="hidden";
    document.getElementById("imgstatus2").style.visibility="hidden";
    document.getElementById("imgstatus3").style.visibility="hidden";
    document.getElementById("imgstatus4").style.visibility="hidden";
}
*/
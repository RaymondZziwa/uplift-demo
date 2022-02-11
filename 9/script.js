
let unitsToBeConverted = ["mm","cm","m","km"]
let userAnswers = []
let initialValues = []
let initialUnits = []
let setUnits = []

let firstUnits = document.querySelectorAll('#tobeconverted');
let secUnits = document.querySelectorAll('#converted');
let userInput = document.querySelectorAll('#answer');
let number = document.querySelectorAll('#randomnum');

for(k=0;k<firstUnits.length;k++){
    firstUnits[k].innerHTML=unitsToBeConverted[Math.floor(Math.random() * unitsToBeConverted.length)];
} 
for(i=0;i<secUnits.length;i++){
    number.innerHTML = Math.floor(Math.random());
    secUnits[i].innerHTML=unitsToBeConverted[Math.floor(Math.random() * unitsToBeConverted.length)];
}
for(i=0;i<number.length;i++){
    number[i].innerHTML = Math.floor(Math.random()*10);
}

const next = () => {   
    initialValues.splice(0, initialValues.length)
    userAnswers.splice(0,userAnswers.length)
    initialUnits.splice(0,initialUnits.length)
    setUnits.splice(0,setUnits.length)
    document.getElementById("imgstatus1").style.visibility="hidden";
    for(k=0;k<firstUnits.length;k++){
        initialUnits.push(firstUnits[k].innerHTML=unitsToBeConverted[Math.floor(Math.random() * unitsToBeConverted.length)]);
    } 
    for(i=0;i<secUnits.length;i++){
        setUnits.push(secUnits[i].innerHTML=unitsToBeConverted[Math.floor(Math.random() * unitsToBeConverted.length)]);
    }
    for(i=0;i<number.length;i++){
        initialValues.push(number[i].innerHTML = Math.floor(Math.random()*10));
    }
}


const check = (x) => {
  
}
document.getElementById("imgstatus1").src = "imgs/sorry.png";
document.getElementById("imgstatus1").style.visiblity = "visible";
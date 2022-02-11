const qtnText = document.getElementById("qtntext");
const lab = document.getElementById("lab");
const dragItem = document.getElementById("dragitem");
const arr = ["Drag the funnel to below the thermometer","Drag the beaker to below the funnel","Place ice in the funnel","Let the ice melt","Mark the mercury level","Place the same thermometer over the flask","Heat the water till it evaporates","Mark off the new level","What you have now is a thermometer with a clear boiling and freezing point, measure the length of the mercury line in cm,mm","Let the termometer cool and then test the thermometer by placing it in a heatsource and measuring the new rise","Enter the figures in the formular below to determine the temperature of the heat source"]

qtnText.innerHTML = "Get the thermometer."

let l =0
let x =2;
let k = 1;
let data;
const drag = (event) => {
    event.dataTransfer.setData("text",event.target.id)
}


const ondragOver = (event)=>{
    event.preventDefault();
}
let img = document.createElement("img");
const drop = (event) =>{
    event.preventDefault();
    data = event.dataTransfer.getData("text")
    //event.target.append(document.getElementById(data))
    //event.target.lastElementChild.removeAttribute("draggable")
    console.log(event.target)
    console.log("dropped")

    console.log(data)
   img.src= `imgs/s${k}.png`;
   k++
   img.classList.add("createdimg");
   lab.append(img);
   dragItem.src = `imgs/${x}.png`;
   x++
   qtnText.innerHTML = arr[l];
   l++
   setTimeout(()=>{
    if(l == 4){
        img.src = "imgs/s5.png";
        qtnText.innerHTML= arr[4];
        img.addEventListener("click",()=>{
            img.src = "imgs/s7.png";
            qtnText.innerHTML= arr[5];
            console.log(l)
            dragItem.src = "imgs/n1.png"
            img.src = "imgs/s8.png"
            lab.addEventListener("drop",newdrop(event));
        })
        // qtnText.innerHTML = arr[4]
    }
 },3000)
//  setTimeout(()=>{
//     if(l == 8){
//         img.src = "imgs/s7.png";
//         qtnText.innerHTML= arr[7];
//         // img.addEventListener("click",()=>{
//         //     img.src = "imgs/s7.png";
//         //     qtnText.innerHTML= arr[7];
//         // })
//     }
//  },3000)
//  setTimeout(()=>{
//     if(l == 6){
//         img.src = "imgs/s7.png";
//         qtnText.innerHTML= arr[5];
//         // img.addEventListener("click",()=>{
//         //     img.src = "imgs/s7.png";
//         //     qtnText.innerHTML= arr[5];
//         // })
//     }

//  },3000)
//  setTimeout(()=>{
//     if(l == 6){
//         img.src = "imgs/s7.png";
//         qtnText.innerHTML= arr[5];
//         // img.addEventListener("click",()=>{
//         //     img.src = "imgs/s7.png";
//         //     qtnText.innerHTML= arr[5];
//         // })
//     }

//  },3000)

//  if(qtnText.innerHTML== arr[6]){
//        img.src = "imgs/s7.png";
//     }

}

const newdrop = (event)=>{
    event.preventDefault();
    data = event.dataTransfer.getData("text")
    //event.target.append(document.getElementById(data))
    //event.target.lastElementChild.removeAttribute("draggable")
    img.src = "imgs/s6.png"
}






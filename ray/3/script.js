const draggables = document.querySelectorAll('.option');


const dropZone = document.getElementById("dropzone");
const orig = document.getElementById("dropZone2");
let data;
const drag = (event) => {
    console.log("drag started")
    event.dataTransfer.setData("text",event.target.id)
}


const ondragOver = (event)=>{
    event.preventDefault();
}


const drop = (event) =>{
    event.preventDefault();
    data = event.dataTransfer.getData("text")
    event.target.append(document.getElementById(data))
    event.target.lastElementChild.removeAttribute("draggable")
    console.log(event.target)
    console.log("dropped")
}

const check = () =>{
    if( document.getElementById("imgqtn").src.indexOf("imgs/1_0000_1png.png")!=-1 && data == "mag"){
        document.getElementById("status").style.visibility="visible";
        setTimeout(change,1500)
       // document.getElementById("imgqtn").src="imgs/2.png";
       // document.getElementById("status").style.visibility="hidden";
    }else if ( document.getElementById("imgqtn").src.indexOf("imgs/2_0000_lyr-2.png")!=-1 && data == "mphy"){
        document.getElementById("status").style.visibility="visible";
        setTimeout(change2,1500)
    }else if(document.getElementById("imgqtn").src.indexOf("imgs/3_0000_lyr.png")!=-1 && data == "elec"){
        document.getElementById("status").style.visibility="visible";
        setTimeout(refresh,1000)
    }
    else{
        document.getElementById("status").src="imgs/sorry.png";
        document.getElementById("status").style.visibility="visible";
        setTimeout(refresh,1000)
    }

    
}


const change = () => {
    document.getElementById("status").style.visibility="hidden";
    document.getElementById("imgqtn").src="imgs/2_0000_lyr-2.png";
    dropZone.innerHTML="";
} 


const change2 = ()=>{
    document.getElementById("status").style.visibility="hidden";
    document.getElementById("imgqtn").src="imgs/3_0000_lyr.png";
    dropZone.innerHTML="";
}


const refresh = ()=>{
    location.reload();
}
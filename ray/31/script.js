
let clone,nodelist,data;
let op1 = document.getElementById("op1").id;
let op2 = document.getElementById("op2").id;
let op3 = document.getElementById("op3").id;
let op4 = document.getElementById("op4").id;
// const dropZone = document.querySelectorAll("#dz");
// const dropZone = document.getElementById(dz1)

const drag = (event) =>{
    event.dataTransfer.setData("text",event.target.id);
}

const dragOver =(event) =>{
    event.preventDefault();
}

const drop = (event) =>{
    event.preventDefault();
    data = event.dataTransfer.getData("text")
    const droppedElement = document.getElementById(data);

    // dropZone.forEach(element => {
    //     dropZone.appendChild(droppedElement);
    // });
  
    clone=event.target.cloneNode(true);
    nodelist=document.getElementById("parent").childNodes;
    for(let i=0;i<nodelist.length;i++)
    {
        if(nodelist[i].id==data)
        {
            dragindex=i;
        }
    }

    document.getElementById("parent").replaceChild(document.getElementById(data),event.target);

    document.getElementById("parent").insertBefore(clone,document.getElementById("parent").childNodes[dragindex]);
    
} 

const check = () =>{
    console.log(data,nodelist);

     if( op1 == nodelist[1].id){
        document.getElementById("imgstatus1").src = "imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus1").style.visibility = "visible";
     }else{
        document.getElementById("imgstatus1").style.visibility = "visible";
     }

     if( op2 == nodelist[3].id){
        document.getElementById("imgstatus2").src = "imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus2").style.visibility = "visible";
     }else{
        document.getElementById("imgstatus2").style.visibility = "visible";
     }
     
     if( op3 == nodelist[5].id){
        document.getElementById("imgstatus3").src = "imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus3").style.visibility = "visible";
     }else{
        document.getElementById("imgstatus3").style.visibility = "visible";
     }
     if( op4 == nodelist[7].id){
        document.getElementById("imgstatus4").src = "imgs/Activity-9_0000s_0004s_0000s_0000_excellent.png";
        document.getElementById("imgstatus4").style.visibility = "visible";
     }else{
        document.getElementById("imgstatus4").style.visibility = "visible";
     }
}

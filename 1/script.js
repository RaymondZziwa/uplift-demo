let pictures = [];
pictures[0] = "imgs/1.png"
pictures[1] = "imgs/2.png"
pictures[2] = "imgs/3.png"
i=1;

const no = () =>{
    document.getElementById("status").src = "imgs/sorry.png";
    document.getElementById("status").style.visibility="visible";
}

const yes = () =>{
    document.getElementById("status").src = "imgs/excel.png";
    document.getElementById("status").style.visibility="visible";
    setTimeout(changed,1000)
   /* for(i=0;i<pictures.length;i++){
         if(i == 1){
        document.getElementById("status").src = "imgs/excel.png";
        document.getElementById("status").style.visibility="visible";
        document.getElementById("imgqtn").src = pictures[i];
       }else if(i == 2){
        document.getElementById("status").src = "imgs/excel.png";
        document.getElementById("status").style.visibility="visible";
        document.getElementById("imgqtn").src = pictures[i];
       }
    }*/
}

const changed = () => {
    document.getElementById("status").style.visibility="hidden";
    document.getElementById("imgqtn").src=pictures[i];
    i++;
    if(i>3){
        location.reload();
    }
}


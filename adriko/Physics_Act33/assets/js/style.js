const ballon = document.querySelector('.ballon');
const empties = document.querySelectorAll('.sta1');

//Fill Listeners
ballon.addEventListener('dragstart', dragStart);
ballon.addEventListener('dragend', dragEnd);

//Loop through empties and call drag events
for(const empty of empties){
    sta1.addEventListener('dragover', dragOver);
    sta1.addEventListener('dragenter', dragEnter);
    sta1.addEventListener('dragleave', dragLeave);
    sta1.addEventListener('drop', dragDrop);
}

//Drag Functions
function dragStart(){
    this.className += ' hold';
    setTimeout(() => {this.className = 'invisible'},0);
    // console.log('start');
}

function dragEnd(){
    this.className = 'ballon';
}

function dragOver(){
    e.preventDefault();
}
function dragEnter(){
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave(){
    this.className += 'sta1';
}
function dragDrop(){
    this.className = 'sta1'
    this.append(ballon);
}





















































// const draggable = document.querySelectorAll('.ballon');

// const dropZone = document.getElementById("dropzone");
// const sta1 = document.getElementById("ball");
// let data;
// const drag = (event) => {
//     console.log("drag started")
//     event.dataTransfer.setData("Text", event.target.id)
// }

// const ondragOver = (event) =>{
//     event.preventDefault();
// }

// const drop = (event) =>{
//     event.preventDefault();
//     data = event.dataTransfer.getData("Text")
//     event.target.append(document.getElementById(data))
//     event.target.lastElementChild.removeAttribute("draggable")
//     console.log(event.target)
//     console.log("dropped")
// }

// const check = () => {
//     if(document.getElementById("ball").src.indexOf("assets/img/rubballon2.png")!=-1 && data == "dropzone"){
//         document.getElementById("")
//     }
// }
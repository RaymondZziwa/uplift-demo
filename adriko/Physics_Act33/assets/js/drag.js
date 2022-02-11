const ballon = document.querySelector('.ballon');
const empties = document.querySelectorAll('.sta1');

//Fill Listeners
ballon.addEventListener('dragstart', dragStart);
ballon.addEventListener('dragend', dragEnd);

//Loop through empty and call drag events
for(const sta1 of empties){
    sta1.addEventListener('dragover', dragOver);
    sta1.addEventListener('dragenter', dragEnter);
    sta1.addEventListener('dragleave', dragLeave);
    sta1.addEventListener('drop', dragDrop);
}

//Drag Functions
function dragStart(){
    this.className += ' hold';
    setTimeout(() => {this.className = 'invisible'}, 0);
    // console.log('start');
}

function dragEnd(){
    this.className = 'ballon';
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
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


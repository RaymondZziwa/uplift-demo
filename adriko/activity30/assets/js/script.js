const g = 9.81;     // acceleration due to gravity.
let masses = {}
let cnt = 0

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const item = document.getElementById(ev.dataTransfer.getData('text'));
    const ptr = document.getElementById('tp');
    const out = document.getElementById('out');
    const range = parseInt(getRange(item.id));

    let mass = g * parseInt(item.id);
    document.getElementById('res').innerText = mass + 'N';
    masses[item.id] = mass;

    console.log(ptr.offsetTop, ":", ptr.parentElement.offsetTop);
    console.log('change: ', range + ptr.offsetTop);     //number
    

    ptr.style.top = range*2 + ptr.offsetTop + 'px';
    out.style.top = range*2 + out.offsetTop + 'px';

    setTimeout(reg, 1000);
    // setTimeout(reg, 1000, ptr.offsetHeight, out.offsetHeight);

    //ptr and out need to do a downward shift.
}

function getRange(id) {
    switch(id) {
        case '1':
            return 10;
        case '3':
            return 20;
        case '6':
            return 30;
        case '8':
            return 40;
    }
}

function reg() {
    console.log('.......');
    document.getElementById('tp').style.top = '23%';
    document.getElementById('out').style.top = '23%';
    document.getElementById('res').innerText = '';
}

function check() {
    cnt++;

    const anss = document.getElementsByClassName('answerK');
    let k = Object.keys(masses);
    let m = Object.values(masses);
    let see = false;

    for(var i = 0; i < anss.length; i++) {
        if (m[i] != anss[i]) {
           anss[i].style.color = 'red';
           if(see) see = false;
        } else {
            anss[i].style.color = 'green';
        }
    }
    
    console.log(see);
    rst();
    if(!see && cnt < 3) {
        document.getElementById('again').style.display = 'unset';
        return;
    }
    if(!see && cnt >= 3) {
        document.getElementById('sorry').style.display = 'unset';
        document.getElementById('chkBn').style.display = 'none';
        return;
    }

    if(see && cnt < 3)
        document.getElementById('again').style.display = 'unset';
}

function rst() {
    document.getElementById('again').style.display = 'none';
    document.getElementById('again').style.display = 'none';
    document.getElementById('again').style.display = 'none';
}


// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

























function other(pr, or) {
    let ptrTop = document.getElementById('tp').style.top.split('px')[0];
    let outTop = document.getElementById('out').style.top.split('px')[0];

    document.getElementById('tp').style.top = ptrTop -  pr + 'px';
    document.getElementById('out').style.top = outTop - or + 'px';
}
let currId = "";
let attemptNo = 0;
const coll = document.getElementsByClassName('statItem');

function assignClass(id) {
    currId.className = "";
    currId = document.getElementById(id);
    currId.className = 'sel';
}

function resetStat() {
    for( var i = 0; i < coll.length; i++)
        coll[i].style.display = "none";
}

function activateGas() {
    assignClass('gas');
}

function activateliq() {
    assignClass('liq');
}

function activatesol() {
    assignClass('sol');
}

function check() {
    attemptNo++;
    resetStat();

    if (attemptNo < 2) {
        if (currId.id == 'gas')
            coll[0].style.display = "unset";
        else
            coll[1].style.display = "unset";
    } else {
        coll[2].style.display = "unset";
        document.getElementById('check').style.display = "none";
    }
}


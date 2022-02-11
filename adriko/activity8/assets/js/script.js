const vol = 100;
const masses =[78, 250, 800, 37];
const coll = document.getElementsByClassName('item');                        // coll[i].id == name of dragged item.
const vols = document.getElementsByClassName('vol');
const mass = document.getElementsByClassName('mass');
const ans_s = document.getElementsByClassName('ans');


function getIndex(id) {
    switch(id) {
        case 'wood':
            return 0;
        case 'steel':
            return 1;
        case 'glass':
            return 2;
        case 'styrofoam':
            return 3;
    }
}

function showValues(id) {
    const ind = getIndex(id);

    mass[ind].value = masses[ind];
    vols[ind].value = vol;
    return ind;
}

function getDensity(mass, volume) {
    return mass/volume;
}


/*
    specifies where the dragged data can be dropped.
*/
function allowDrop(ev) {
    ev.preventDefault();
}

/*
    what should happen when the element is dragged.
*/
function drag(ev) {
    // setting the datatype and the value of the dragged data.
    ev.dataTransfer.setData('text', ev.target.id);
}

/*
    performing the drop event.
*/
function drop(ev) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    //ev.target.appendParent(document.getElementById(data));
    let result = document.getElementById('results');
    result.innerHTML = masses[showValues(data)];
    result.style.display = 'unset';
    result.style.fontSize = '30px';
    result.style.textAlign = 'center';
}

function check() {
    let densties = document.getElementsByClassName('dens');

    for (var i = 0; i < densties.length; i++) {
        if (densties[i].value == getDensity(mass[i].value, vols[i].value))
            ans_s[i].src = './assets/img/exce.png';
        else
            ans_s[i].src = './assets/img/sorry.png';

        ans_s[i].style.display = 'unset';

    }
}
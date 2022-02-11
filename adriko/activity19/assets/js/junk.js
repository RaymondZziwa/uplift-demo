let cnt = 0;

/*
    events should be relatively the same but with a delay within them.
*/






// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

function moveAt(pageX, pageY) {
    const item = document.getElementById('wPush');

    item.style.left = pageX - item.offsetWidth / 2 + 'px';
    item.style.top = pageY - item.offsetHeight / 2 + 'px';
}

// 'onMouseMove' event for a given tag.
function mouseMv(ev) {
    moveAt(ev.pageX, ev.pageY);
}

/*
    what should happen when the element is dragged.
*/
function drag_O(ev) {
    const item = document.getElementById('wPush');
    // setting the datatype and the value of the dragged data.
    ev.dataTransfer.setData('text', ev.target.id);
    item.style.position = 'absolute';
    // requires setting z indexes of some items.
}

function drag_h2O(ev) {
    const item = document.getElementById('wPush');

    // setting the datatype and the value of the dragged data.
    ev.dataTransfer.setData('text', ev.target.id);

    //document.addEventListener('mousemove', mouseMv);
}


// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

function resetDisp() {
    document.getElementById('excel').style.display = 'none';
    document.getElementById('try').style.display = 'none';
    document.getElementById('fail').style.display = 'none';
}

function check() {
    cnt++;
    const ans = document.getElementById('ans').value.trim();
    const see = ans.search(/(air|water)\b/i);

    resetDisp();
    if (see == 0 && ans.split(' ').length == 1) {
        document.getElementById('excel').style.display = 'unset';
        return;
    }

    if (cnt < 3)
        document.getElementById('try').style.display = 'unset';
    else {
        document.getElementById('fail').style.display = 'unset';
        document.getElementById('check').style.display = 'none';
    }
}










function mouseDn_h2o(ev) {
    const item = document.getElementById('wPush');

    //item.style.display = 'none';
    //item.style.zIndex = -5;
    console.log(ev);

    // then add a mouse listener.
    //document.addEventListener('mousemove', _moveAt);
}

function drag_h2o(ev) {

}

function mouseUp_h2o(ev) {
    // remove the added mouse listener
    //document.removeEventListener('mousemove', _moveAt);
    const item = document.getElementById('wPush');

    //item.style.display = 'unset';
    //item.style.zIndex = -'unset';
}











let y  = 0;
let per = 0;
let y2 = 0;
let trial = 0;

function dragSt(ev) {
    y = ev.clientY;
    item = document.getElementById('wPush');
    per = item.style.top.split('%')[0];

    trial = item.offsetTop;
    y2 = ev.pageY - (ev.pageY - item.offsetTop);
}

function drag(ev) {
    const item = document.getElementById('wPush');

    //console.log(ev.screenY - (ev.screenY - item.offsetTop));
    //console.log(item.style.top, ":", ev.y);
    //worst = 38%   orig = 10%;

    console.log('dragging');
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    //console.log(y2, '-', ev.pageY - y2);                        // seems to be going to work.
    ev.preventDefault();

    const item = document.getElementById('wPush');

    let lft = ev.screenX - (ev.screenX - item.offsetLeft);
    let tp = ev.screenY - (ev.screenY - item.offsetTop);
    let y_tst = ev.clientY - (y - item.offsetTop);
    let perNew = (ev.clientY / y) * per;
    //console.log((ev.clientY / y) * per);
    // console.log(ev.y, ":", y);
    //console.log(((ev.y - y) / y) * per, ":", y_tst);

    //const val = ((ev.pageY / y2) * parseInt(per)) - parseInt(per);
    const val = (parseInt(per) / y2) * ev.pageY;
    // (parseInt(per) / y2) * ev.pageY
    // console.log(ev.pageY / y2, "::", per, "::", val);
    let n_per = parseInt(per) + (ev.pageY / y2) * 2;

    // if(n_per > 39)
    //     n_per = 38;
    // else if(n_per < 0)
    //     n_per = 10;

    console.log(item.offsetTop, "''", item.parentElement.offsetTop);
    let change1 = ev.clientY - item.offsetTop;
    let change2 = ev.clientY - item.parentElement.offsetTop;
    // item.style.top = perNew + per + '%';
    item.style.top =  (change2) + 'px';

    setTimeout(resTop, 2000);
    // delay(1000)
    //item.style.top = '10%';
    /** must return back to normal after a few seconds. */
}

function resTop() {
    document.getElementById('wPush').style.top = '10%';
    // document.getElementById('wPush').style.position = posn;
}
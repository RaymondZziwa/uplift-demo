let cnt = 0;

/*
    events should be relatively the same but with a delay within them.
*/

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

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------







function delay() {
    return;
}


// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

function dragSt_h2o(ev) {
    /*
        y = ev.clientY;
        item = document.getElementById('wPush');
        per = item.style.top.split('%')[0];

        trial = item.offsetTop;
        y2 = ev.pageY - (ev.pageY - item.offsetTop);
    */
   return;
}

function drag_h2o(ev) {
    console.log('dragging');
}

function allowDrop_h2o(ev) {
    ev.preventDefault();
}

function drop_h2o(ev) {
    ev.preventDefault();

    const item = document.getElementById('wPush');
    const item2 = document.getElementById('wWater');

    let change = ev.clientY - item.parentElement.offsetTop;
    let change2 = change + item2.offsetTop - item.offsetTop;
    let heigh = (100/item2.parentElement.offsetHeight) * change;
    let heigh2 = item.style.top.split('%')[0]

    item.style.top =  change + 'px';
    item2.style.top =  change2 + 'px';
    item2.style.height = (item2.style.height.split('%')[0] * 2) - heigh + 'px';
    item2.style.display = 'none';
    //item2.style.height = item2.style.height.split('%')[0] - heigh + '%';

    // (100/ parentElement.offsetHeight) * change2
    console.log(heigh, ":", change2, ":", change);
    console.log(change2-change);
    

    setTimeout(resTop, 2000);
}

function resTop() {
    document.getElementById('wPush').style.top = '10%';
    document.getElementById('wWater').style.top = '45%';
    document.getElementById('wWater').style.height = '35%';
}

/*
    width: 40px;
    left: 16.5%;
    top: 45%;
    height: 35%;
    opacity: 50%;
*/

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------





// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

function dragSt_o(ev) {
    /*
        y = ev.clientY;
        item = document.getElementById('wPush');
        per = item.style.top.split('%')[0];

        trial = item.offsetTop;
        y2 = ev.pageY - (ev.pageY - item.offsetTop);
    */
   return;
}

function drag_o(ev) {
}

function allowDrop_o(ev) {
    ev.preventDefault();
}

function drop_o(ev) {
    ev.preventDefault();

    const item = document.getElementById('aPush');

    let change = ev.clientY - item.parentElement.offsetTop;
    item.style.top =  change + 'px';

    setTimeout(resTop_, 1000);
}

function resTop_() {
    document.getElementById('aPush').style.top = '10%';
}

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
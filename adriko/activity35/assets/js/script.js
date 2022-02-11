const up=8, dn=3, lt=16, rt=4;
const y = up - dn, x = lt - rt;
const y2 = Math.pow(y,2), x2 = Math.pow(x,2);
const res1 = x-y, res2 = x2 - y2, res3 = Math.round(Math.sqrt(res2), 2);

function putResults() {
    document.getElementById('.1').innerText = lt;
    document.getElementById('.2').innerText = rt;
    document.getElementById('.3').innerText = x;

    document.getElementById('.4').innerText = up;
    document.getElementById('.5').innerText = dn;
    document.getElementById('.6').innerText = y;

    document.getElementById('.7').innerText = x2;
    document.getElementById('.8').innerText = y2;
    document.getElementById('.9').innerText = res2;     //should be opposite

    document.getElementById('.10').innerText = x;
    document.getElementById('.11').innerText = y;
    document.getElementById('.12').innerText = res1;    // should be opposite

    document.getElementById('.13').innerText = res3;
    document.getElementById('.14').innerText = res1;
}

function check() {
    putResults();
}
function clockHour(elemHour){
    var today = new Date();
    var h=today.getHours();
    h = checkTimeHour(h);

    document.getElementById(elemHour).innerHTML=h;

    setTimeout(clockHour,1000,elemHour);
}
clockHour("Hour");

function checkTimeHour(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

function clockMinute(elemMinute){
    var today = new Date();
    var m=today.getMinutes();
    m = checkTimeMinute(m);

    document.getElementById(elemMinute).innerHTML= ':&nbsp;' + m + '&nbsp;:';

    setTimeout(clockMinute,1000,elemMinute);
}
clockMinute("Minute");

function checkTimeMinute(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

function clockSeconds(elemSeconds){
    var today = new Date();
    var s=today.getSeconds();
    var element = document.getElementById('Seconds');
    s = checkTimeSeconds(s);

    document.getElementById(elemSeconds).innerHTML=s;
    element.style.color = '#f05570';

    setTimeout(clockSeconds,1000,elemSeconds);
}
clockSeconds("Seconds");

function checkTimeSeconds(i) {
    if (i < 10) {i = "0" + i}
    return i;
}


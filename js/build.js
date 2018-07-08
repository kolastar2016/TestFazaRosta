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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjbG9ja0hvdXIoZWxlbUhvdXIpe1xyXG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBoPXRvZGF5LmdldEhvdXJzKCk7XHJcbiAgICBoID0gY2hlY2tUaW1lSG91cihoKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtSG91cikuaW5uZXJIVE1MPWg7XHJcblxyXG4gICAgc2V0VGltZW91dChjbG9ja0hvdXIsMTAwMCxlbGVtSG91cik7XHJcbn1cclxuY2xvY2tIb3VyKFwiSG91clwiKTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrVGltZUhvdXIoaSkge1xyXG4gICAgaWYgKGkgPCAxMCkge2kgPSBcIjBcIiArIGl9XHJcbiAgICByZXR1cm4gaTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvY2tNaW51dGUoZWxlbU1pbnV0ZSl7XHJcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIG09dG9kYXkuZ2V0TWludXRlcygpO1xyXG4gICAgbSA9IGNoZWNrVGltZU1pbnV0ZShtKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtTWludXRlKS5pbm5lckhUTUw9ICc6Jm5ic3A7JyArIG0gKyAnJm5ic3A7Oic7XHJcblxyXG4gICAgc2V0VGltZW91dChjbG9ja01pbnV0ZSwxMDAwLGVsZW1NaW51dGUpO1xyXG59XHJcbmNsb2NrTWludXRlKFwiTWludXRlXCIpO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tUaW1lTWludXRlKGkpIHtcclxuICAgIGlmIChpIDwgMTApIHtpID0gXCIwXCIgKyBpfVxyXG4gICAgcmV0dXJuIGk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb2NrU2Vjb25kcyhlbGVtU2Vjb25kcyl7XHJcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIHM9dG9kYXkuZ2V0U2Vjb25kcygpO1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnU2Vjb25kcycpO1xyXG4gICAgcyA9IGNoZWNrVGltZVNlY29uZHMocyk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbVNlY29uZHMpLmlubmVySFRNTD1zO1xyXG4gICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICcjZjA1NTcwJztcclxuXHJcbiAgICBzZXRUaW1lb3V0KGNsb2NrU2Vjb25kcywxMDAwLGVsZW1TZWNvbmRzKTtcclxufVxyXG5jbG9ja1NlY29uZHMoXCJTZWNvbmRzXCIpO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tUaW1lU2Vjb25kcyhpKSB7XHJcbiAgICBpZiAoaSA8IDEwKSB7aSA9IFwiMFwiICsgaX1cclxuICAgIHJldHVybiBpO1xyXG59XHJcblxyXG4iXX0=

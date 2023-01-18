function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
        session = "AM"
    }

    else if(h > 12){
        h = h - 12;
        session = "PM";
    }
    else if(h == 12) {
        session = "PM"
    }
    else {}
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    let message;
    var time = h + ":" + m + ":" + s + " " + session;
    if(session == "AM" && h<5){message = "It's a little late, do you want to sleep?"} 
    else { message = "Arundhati Balasubramaniam"}
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    document.getElementById("MyClockMessage").innerTest = message;
    document.getElementById("MyClockMessage").textContent = message;
    
    setTimeout(showTime, 1000);
    
}

showTime();
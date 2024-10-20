setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h>24){
        h=h-24;
    }
    
    else if (h<10) {
        h='0'+h;
    }
    else if(m<10){
        m='0'+m;
    }
    else if(s<10){
        s='0'+s;
    }

    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;

    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

}, 1000);



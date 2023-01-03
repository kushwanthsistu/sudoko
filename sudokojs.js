var sudokotable = document.getElementById('sudokotable') ;
var activeelement ;
var numberbuttons = document.getElementById('numberbuttons') ;
var attempts = 0 ;
var one = 0 ;
var two = 0 ;
var three = 0 ;
var four = 0 ;
var five = 0 ;
var six = 0 ;
var seven = 0 ;
var eight = 0 ;
var nine = 0 ;
var total = 0 ;
var seconds = 0 ;
var minutes = 0 ;
var minuteblock = document.getElementById('minutes') ;
var secondsblock = document.getElementById('seconds') ;
var highlightarray = [] ;
var undobutton = document.getElementById('undobutton') ;
var undostack = [] ;
var refreshbutton = document.getElementById('refreshbutton') ;
var notification = document.getElementById('myAudio') ;


let xhr = new XMLHttpRequest() ;
xhr.open("GET", "https://sudoku-back-eenj.onrender.com/testing", true) ;
xhr.send() ;
xhr.onload = () => {
    setTimeout(() => {
    let data = xhr.responseText ;
    data = JSON.parse(data) ;
    console.log(data) ;
    for(let i = 0;i<data.locations.length;i++) {
        document.getElementById(data.locations[i]).innerHTML = data.elements[i] ;
    }
    one = data.one ;
    two = data.two ;
    three = data.three ;
    four = data.four ;
    five = data.five ;
    six = data.six ;
    seven = data.seven ;
    eight = data.eight ;
    nine = data.nine ;
    total = data.locations.length ;
    setInterval(() => {
        seconds = seconds + 1 ;
        if(seconds == 60) {
            seconds = 0 ;
            minutes++ ;
        }
        if(minutes < 10)
        minuteblock.innerText = `0${minutes}` ;
        else
        minuteblock.innerText = minutes ;
        if(seconds < 10)
        secondsblock.innerText = `0${seconds}` ;
        else
        secondsblock.innerText = seconds ;
    }, 1000) ;
    document.getElementById('loadingouterblock').style.display = "none" ;
},1000 ) ;
}

sudokotable.addEventListener('click', (e) => {
    if(!e.target.innerHTML) {
    if(activeelement) {
    var p = activeelement.id ;
    for(var i=1;i<=9;i++) {
        document.getElementById(p.charAt(0)+i).style.backgroundColor = "white" ;
        document.getElementById(i+p.charAt(1)).style.backgroundColor = "white" ;
    }
    let a = parseInt(p.charAt(0)) ;
    let b = parseInt(p.charAt(1)) ;
    a = findnearblock(a) ;
    b = findnearblock(b) ;
    for(let i = a;i<a+3;i++) {
        for(let j = b;j<b+3;j++) {
            document.getElementById((i*10)+j).style.backgroundColor = "white" ;
        }
    }
    activeelement = e.target ;
    var p = activeelement.id ;
    for(var i=1;i<=9;i++) {
    document.getElementById(p.charAt(0)+i).style.backgroundColor = "#DBF3FA" ;
    document.getElementById(i+p.charAt(1)).style.backgroundColor = "#DBF3FA" ;
    }
    a = parseInt(p.charAt(0)) ;
    b = parseInt(p.charAt(1)) ;
    a = findnearblock(a) ;
    b = findnearblock(b) ;
    for(let i = a;i<a+3;i++) {
        for(let j = b;j<b+3;j++) {
            document.getElementById((i*10)+j).style.backgroundColor = "#DBF3FA" ;
        }
    }
    }
    else {
    if(highlightarray.length) {
        for(let x = 0;x<highlightarray.length;x++) {
            document.getElementById(highlightarray[x]).style.backgroundColor = "white" ;
        }
        highlightarray =  [] ;
    }
    activeelement = e.target ;
    var p = activeelement.id ;
    for(var i=1;i<=9;i++) {
    document.getElementById(p.charAt(0)+i).style.backgroundColor = "#DBF3FA" ;
    document.getElementById(i+p.charAt(1)).style.backgroundColor = "#DBF3FA" ;
    }
    a = parseInt(p.charAt(0)) ;
    b = parseInt(p.charAt(1)) ;
    a = findnearblock(a) ;
    b = findnearblock(b) ;
    for(let i = a;i<a+3;i++) {
        for(let j = b;j<b+3;j++) {
            document.getElementById((i*10)+j).style.backgroundColor = "#DBF3FA" ;
        }
    }
}}
    else {
        if(highlightarray.length) {
            for(let x = 0;x<highlightarray.length;x++) {
                document.getElementById(highlightarray[x]).style.backgroundColor = "white" ;
            }
            highlightarray = [] ;
        }
        if(activeelement) {
        p = activeelement.id ;
        for(var i=1;i<=9;i++) {
            document.getElementById(p.charAt(0)+i).style.backgroundColor = "white" ;
            document.getElementById(i+p.charAt(1)).style.backgroundColor = "white" ;
        }
        a = parseInt(p.charAt(0)) ;
        b = parseInt(p.charAt(1)) ;
        a = findnearblock(a) ;
        b = findnearblock(b) ;
        for(let i = a;i<a+3;i++) {
        for(let j = b;j<b+3;j++) {
            document.getElementById((i*10)+j).style.backgroundColor = "white" ;
        }
    }
        activeelement = null ;
    }
    var z = e.target.innerHTML ;
    for(let x = 1;x<10;x++) {
    for(let y = 1;y<10;y++) {
        if(document.getElementById((x*10)+y).innerText == z) {
        document.getElementById((x*10)+y).style.backgroundColor =  "#E6D1F2" ;
        highlightarray.push((x*10)+y) ;
        }
    }}
    }
})

function findnearblock(n) {
    n = parseInt(n) ;
    if(n <= 3)
    return 1 ;
    else if(n <= 6)
    return 4 ;
    else
    return 7 ;
}

function deactivebuttons(n) {
    if(n == '1') {
        one++ ;
        if(one == 9)
        document.getElementById('1').disabled = true ;
    }
    else if(n == '2') {
        two++ ;
        if(two == 9)
        document.getElementById('2').disabled = true ;
    }
    else if(n == '3') {
        three++ ;
        if(three == 9)
        document.getElementById('3').disabled = true ;
    }
    else if(n == '4') {
        four++ ;
        if(four == 9)
        document.getElementById('4').disabled = true ;
    }
    else if(n == '5') {
        five++ ;
        if(five == 9)
        document.getElementById('5').disabled = true ;
    }
    else if(n == '6') {
        six++ ;
        if(six == 9)
        document.getElementById('6').disabled = true ;
    }
    else if(n == '7') {
        seven++ ;
        if(seven == 9)
        document.getElementById('7').disabled = true ;
    }
    else if(n == '8') {
        eight++ ;
        if(eight == 9)
        document.getElementById('8').disabled = true ;
    }
    else {
        nine++ ;
        if(nine == 9)
        document.getElementById('9').disabled = true ;
    }
}

numberbuttons.addEventListener('click', (e) =>{
    let p = e.target ;
    if(p.id != "numberbuttons") {
        if(activeelement && !activeelement.innerHTML) {
            let z = 0 ;
            let y = activeelement.id ;
            undostack.push(y) ;
            for(let i=1;i<10;i++) {
                if(document.getElementById(y.charAt(0)+i).innerHTML == p.id)
                z = 1 ;
            }
            for(let i=1;i<10;i++) {
                if(document.getElementById(i+y.charAt(1)).innerHTML == p.id)
                z = 1 ;
            }
            let a = parseInt(y.charAt(0)) ;
            let b = parseInt(y.charAt(1)) ;
            a = findnearblock(a) ;
            b = findnearblock(b) ;
            for(let i = a;i<a+3;i++) {
                for(let j = b;j<b+3;j++) {
                    if(document.getElementById((i*10)+j).innerHTML == p.id)
                    z = 1 ;
                }
            }
            if(z == 0) {
            activeelement.innerHTML = p.id ;
            activeelement.style.backgroundColor = "#CFF6B6" ;
            deactivebuttons(p.id) ;
            total++ ;
            if(total == 81)
            document.getElementById('successouterblock').style.display = "block" ;
            }
            else {
                attempts++ ;
                document.getElementById('attemptsblock').innerText = `mistakes : ${attempts}/5` ;
                activeelement.style.backgroundColor = "#FFCCCB" ;
                if(attempts == 5) {
                    document.getElementById('doneouterblock').style.display = "block" ;
                }
            }
       }
       else {
           notification.play() ;
       }
    }
})

function activatebutton(n) {
    if(n == "1") {
    one-- ;
    document.getElementById('1').disabled = false ;
    }
    else if(n == "2") {
    two-- ;
    document.getElementById('2').disabled = false ;
    }
    else if(n == "3") {
    three-- ;
    document.getElementById('3').disabled = false ;
    }
    else if(n == "4") {
    four-- ;
    document.getElementById('4').disabled = false ;
    }
    else if(n == "5") {
    five-- ;
    document.getElementById('5').disabled = false ;
    }
    else if(n == "6") {
    six-- ;
    document.getElementById('6').disabled = false ;
    }
    else if(n == "7") {
    seven-- ;
    document.getElementById('7').disabled = false ;
    }
    else if(n == "8") {
    eight-- ;
    document.getElementById('8').disabled = false ;
    }
    else {
    nine-- ;
    document.getElementById('9').disabled = false ;
    }
}

function decolorize() {
    let i = 0 ;
    let j = 0 ;
    for(i=1;i<10;i++) {
        for(j=1;j<10;j++) {
            document.getElementById((i*10)+j).style.backgroundColor =  "white" ;
        }
    }
}

undobutton.addEventListener('click', () => {
    decolorize() ;
    if(undostack.length) {
    let p = undostack[undostack.length - 1] ;
    p = document.getElementById(p) ;
    activatebutton(p.innerHTML) ;
    total-- ;
    p.innerHTML = '' ;
    undostack.pop() ;
    }
    else {
        notification.play() ;
    }
}) ;

refreshbutton.addEventListener('click', () => {
    while(undostack.length) {
        let p = undostack[undostack.length - 1] ;
        p = document.getElementById(p) ;
        activatebutton(p.innerHTML) ;
        total-- ;
        p.innerHTML = '' ;
        undostack.pop() ;
    }
    seconds = -1 ;
    minutes = 0 ;
    attempts = 0 ;
    document.getElementById('attemptsblock').innerText = `mistakes : ${attempts}/5` ;
    decolorize() ;
})
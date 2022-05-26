var sudokotable = document.getElementById('sudokotable') ;
var activeelement ;
var numberbuttons = document.getElementById('numberbuttons') ;
var attempts = 5 ;
var one = 3 ;
var two = 4 ;
var three = 5 ;
var four = 5 ;
var five = 6 ;
var six = 3 ;
var seven = 3 ;
var eight = 4 ;
var nine = 4 ;
var total = 37 ;


sudokotable.addEventListener('click', (e) => {
    if(!e.target.innerHTML) {
    if(activeelement) {
    var p = activeelement.id ;
    for(var i=1;i<=9;i++) {
        document.getElementById(p.charAt(0)+i).style.backgroundColor = "white" ;
        document.getElementById(i+p.charAt(1)).style.backgroundColor = "white" ;
    }
    activeelement = e.target ;
    var p = activeelement.id ;
    for(var i=1;i<=9;i++) {
    document.getElementById(p.charAt(0)+i).style.backgroundColor = "skyblue" ;
    document.getElementById(i+p.charAt(1)).style.backgroundColor = "skyblue" ;
    }
    }
    else {
    activeelement = e.target ;
    var p = activeelement.id ;
    for(var i=1;i<=9;i++) {
    document.getElementById(p.charAt(0)+i).style.backgroundColor = "skyblue" ;
    document.getElementById(i+p.charAt(1)).style.backgroundColor = "skyblue" ;
    }}}
    else {
        if(activeelement) {
        p = activeelement.id ;
        for(var i=1;i<=9;i++) {
            document.getElementById(p.charAt(0)+i).style.backgroundColor = "white" ;
            document.getElementById(i+p.charAt(1)).style.backgroundColor = "white" ;
        }
        activeelement = null ;
    }}
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
            activeelement.style.backgroundColor = "lime" ;
            deactivebuttons(p.id) ;
            total++ ;
            if(total == 81)
            alert("done") ; 
            }
            else {
                attempts-- ;
                document.getElementById('attemptsblock').innerText = `Attempts : ${attempts}` ;
                activeelement.style.backgroundColor = "#FFCCCB" ;
                if(attempts == 0) {
                    document.getElementById('doneouterblock').style.display = "block" ;
                }
            }
       }
    }
})
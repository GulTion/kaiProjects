function foc() {
    document.getElementById("ino").focus();

}
var i = 1;
var zz = 0;

function clicka() {
    foc();

    var a11, a12, a13, a21, a22, a23, a31, a32, a33, d1, d2, d3;

    var j = document.getElementById("result").value;
    var inp = document.getElementById("ino").value;
    var data = inp.split(",");
    var dat1, dat2, dat3;
   
        
        dat1 = 0;
    dat2 = 0;
    dat3 = 0;
    dat4 = 0;
    
   
    
    
    
    if (data.length == 4) {
        


        if (i == 1) {
            document.getElementById("result").value = dat1 + "x+" + dat2 + "y+" + dat3 + "z = " + dat4;


            for (var c = 1; c <= 4; c++) {
                document.getElementById("a1" + c).innerHTML = data[c - 1];
            }

        }
        if (i == 2) {
            document.getElementById("result").value = j + "\n" + dat1 + "x+" + dat2 + "y+" + dat3 + "z = " + dat4;
            for (var c = 1; c <= 4; c++) {
                document.getElementById("a2" + c).innerHTML = data[c - 1];
            }
        }
        if (i == 3) {
            document.getElementById("result").value = j + "\n" + dat1 + "x+" + dat2 + "y+" + dat3 + "z = " + dat4;
            for (var c = 1; c <= 4; c++) {
                document.getElementById("a3" + c).innerHTML = data[c - 1];
            }
        }
        i += 1;

        var a11 = document.getElementById("a11").innerHTML;
        var a12 = document.getElementById("a12").innerHTML;
        var a13 = document.getElementById("a13").innerHTML;

        var a21 = document.getElementById("a21").innerHTML;
        var a22 = document.getElementById("a22").innerHTML;
        var a23 = document.getElementById("a23").innerHTML;


        var a31 = document.getElementById("a31").innerHTML;
        var a32 = document.getElementById("a32").innerHTML;
        var a33 = document.getElementById("a33").innerHTML;






        var d1 = document.getElementById("a14").innerHTML;
        var d2 = document.getElementById("a24").innerHTML;
        var d3 = document.getElementById("a34").innerHTML;

        var c11 = (a22 * a33) - (a23 * a32);
        var c12 = -1 * ((a12 * a33) - (a13 * a32));
        var c13 = (a12 * a23) - (a13 * a22);

        var d = a11 * (c11) + a21 * (c12) + a31 * (c13);

        var c21 = -1 * ((a21 * a33) - (a23 * a31));
        var c22 = (a11 * a33) - (a13 * a31);
        var c23 = -1 * ((a11 * a23) - (a13 * a21));

        var c31 = (a21 * a32) - (a22 * a31);
        var c32 = -1 * ((a11 * a32) - (a12 * a31));
        var c33 = (a11 * a22) - (a12 * a21);

        var b1 = d1 * c11 + d2 * c12 + d3 * c13;
        var b2 = d1 * c21 + d2 * c22 + d3 * c23;
        var b3 = d1 * c31 + d2 * c32 + d3 * c33;

        var x1 = Math.round((b1 / d) * 1000000) / 1000000;
        var y1 = Math.round((b2 / d) * 1000000) / 1000000;
        var z1 = Math.round((b3 / d) * 1000000) / 1000000;

        if (i == 4) {
            var wow = "x: " + x1 + "; y: " + y1 + "; z: " + z1;
            
        }

    }
    if (data.length == 3) {
        var aa = document.getElementById("result").value;
        if (i == 1 ) {
            document.getElementById("result").value = inp;


            for (var c = 1; c <= 3; c++) {
                document.getElementById("a1" + c).innerHTML = data[c - 1];
            }

        }
        if (i == 2) {
            document.getElementById("result").value = aa + "\n" + inp;
            for (var c = 1; c <= 3; c++) {
                document.getElementById("a2" + c).innerHTML = data[c - 1];
            }
        }
        if (i == 3) {
            document.getElementById("result").value = aa + "\n" + inp
            for (var c = 1; c <= 3; c++) {
                document.getElementById("a3" + c).innerHTML = data[c - 1];
            }
        }
        i += 1;
        var a11 = document.getElementById("a11").innerHTML;
        var a12 = document.getElementById("a12").innerHTML;
        var a13 = document.getElementById("a13").innerHTML;

        var a21 = document.getElementById("a21").innerHTML;
        var a22 = document.getElementById("a22").innerHTML;
        var a23 = document.getElementById("a23").innerHTML;


        var a31 = document.getElementById("a31").innerHTML;
        var a32 = document.getElementById("a32").innerHTML;
        var a33 = document.getElementById("a33").innerHTML;

        var d = a11 * ((a22 * a33) - (a32 * a23)) - (a12 * ((a21 * a33) - (a31 * a23))) + (a13 * ((a21 * a32) - (a31 * a22)));



        var c11 = (a22 * a33) - (a23 * a32);
        var c12 = -1 * ((a12 * a33) - (a13 * a32));
        var c13 = (a12 * a23) - (a13 * a22);



        var c21 = (-1 * ((a21 * a33) - (a23 * a31)));
        var c22 = (a11 * a33) - (a13 * a31);
        var c23 = -1 * ((a11 * a23) - (a13 * a21));

        var c31 = (a21 * a32) - (a22 * a31);
        var c32 = -1 * ((a11 * a32) - (a12 * a31));
        var c33 = (a11 * a22) - (a12 * a21);

        var cc = [c11, c12, c13, c21, c22, c23, c31, c32, c33];
        document.getElementById("det").innerHTML = "/"+d;

        for (var zet = 1; zet <= 9; zet++) {
            document.getElementById("a" + zet).innerHTML = cc[zet - 1];
        };
        if (c11) {
            document.getElementById("inverse").style.display = "block";
            document.getElementById("right").innerHTML = "Close";
            document.getElementById("left").innerHTML = " ";document.getElementById("center").innerHTML = " ";
    
            switch(zz){
                case 0:
                    zz = 1;
                    break;
                case 1:
                    data[0] = 0;
                    data[1] = 0;
                    data[2] = 0;
                    data[3] = 0;
                    zz = 0;
                    alert("hi");
                    break;
                    
            }
            

        }
    }
    }
    
    



function enterdown() {
    document.getElementById("center").style.background = "rgba(0,0,0,0.5)";
    clicka();
    document.getElementById("ino").value = "";
}

function enterup() {
    document.getElementById("center").style.background = "none";
}

function leftdown() {
    document.getElementById("left").style.background = "rgba(0,0,0,0.5)";
}

function leftup() {
    document.getElementById("left").style.background = "none";

}

function rightdown() {
    document.getElementById("right").style.background = "rgba(0,0,0,0.5)";
}

function rightup() {
    document.getElementById("right").style.background = "none";
}





function reset(){
    document.getElementById("ino").value = " ";
    document.getElementById("result").value = "";
    foc();
   document.getElementById("inverse").style.display ="none";
    document.getElementById("right").innerHTML = "Reset";
    document.getElementById("left").innerHTML ="Help";
    document.getElementById("center").innerHTML = "Enter";
    
    
}
var hh = 0;
function help(){
    switch(hh){
        case 0:
            document.getElementById("help").style.display = "block";
            
            document.getElementById("right").innerHTML = "";
            document.getElementById("left").innerHTML = "Close";
            document.getElementById("center").innerHTML = "";
            hh = 1;
            break;
        case 1:
            document.getElementById("help").style.display = "none";
            document.getElementById("right").innerHTML = "Reset";
            document.getElementById("left").innerHTML = "Help";
            document.getElementById("center").innerHTML = "Enter";
            
            hh = 0;
            break;
    }
    
}




function handleKeyDown(evt) {
    //alert(evt.key);
    switch (evt.key) {
        case '0':
            closeplay();
            break;
            
        case 'Control':
        case 'SoftLeft':
            //SoftLeft
            help();
            leftdown();
           
            
            break;
        case 'Shift':
        case 'SoftRight': //SoftRight
            rightdown();
            reset();
            break;

        case 'Enter':
            enterdown();
            break;
        case 'Call':
            window.close();
            break;
    };
};
document.addEventListener('keydown', handleKeyDown);

function handleKeyUp(evt) {

    switch (evt.key) {
        case 'Control':
        case 'SoftLeft':
            //SoftLeft
            
            leftup();
            break;
        case 'Shift':
        case 'SoftRight': //SoftRight
            rightup();
            break;


        case 'Enter':
            enterup();
            break;
        case 'Call':
            window.close();
            break;
    };
};
document.addEventListener('keyup', handleKeyUp);

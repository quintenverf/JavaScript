let keuze = true;
let keuze1 = true;
// boolean = false;

// var test = "*";

// var een = Switch1();
// var twee = Switch2();
// var drie = Switch3();
// var vier = Switch4();
// var vijf = Switch5();
// var zes = Switch6();
// var zeven = Switch7();
// var acht = Switch8();
// var negen = Switch9();

// let winner;

// function test(){



//     if (een == true && twee == true && drie == true){
//     winner = 1;
//     }
//     else if(zeven == true && acht == true && negen == true){
//     winner = 2;
//     }
//     else if(vier == true && vijf == true && zes == true){
//     winner = 3;
//     }
//     else if (een == true && vier == true && zeven == true){
//     winner = 4;
//     }
//     else if(twee == true && vijf == true && acht == true){
//     winner = 5;
//     }
//     else if(drie == true && zes == true && negen == true){
//     winner = 6;
//     }
//     else if(een == true && vijf == true && negen == true){
//     winner = 7;
//     }
//     else if(drie == true && vijf == true && zeven == true){
//     winner = 8;
//     }
//     return winner;
//     }

// function Winner(){
// test()
// switch (winner) {
//     case 1:
//     if (keuze1 == true){
//         console.log("x heft gewonnen");
//     }else {
//         console.log("o heeft gewonnen");
//     }break;
//     default:
//         console.log("gwn iets")
//     }

// }

document.getElementById("klik").addEventListener("click", function(){
    console.log("click");
    Click();
});

document.getElementById("klik1").addEventListener("click", function(){
    console.log("click");
    Switch1();
    Click();

});

document.getElementById("klik2").addEventListener("click", function(){
    console.log("click");
    Switch2();
    Click();
    // Winner();
});

document.getElementById("klik3").addEventListener("click", function(){
    console.log("click");
    Switch3();
    Click();
});

document.getElementById("klik4").addEventListener("click", function(){
    console.log("click");
    Switch4();
    Click();
});

document.getElementById("klik5").addEventListener("click", function(){
    console.log("click");
    Switch5();
    Click();
});

document.getElementById("klik6").addEventListener("click", function(){
    console.log("click");
    Switch6();
    Click();
});

document.getElementById("klik7").addEventListener("click", function(){
    console.log("click");
    Switch7();
    Click();
});

document.getElementById("klik8").addEventListener("click", function(){
    console.log("click");
    Switch8();
    Click();
});

document.getElementById("klik9").addEventListener("click", function(){
    console.log("click");
    Switch9();
    Click();
});

function Click() {
    if(keuze == true) {
        document.getElementById("currentPlayer").innerText = "speler1 = X";
        // document.getElementById("output1").innerText = "O";
        // document.getElementById("output2").innerText = "X";
        keuze = false;
    } else {
        document.getElementById("currentPlayer").innerText = "speler2 = O";
        // document.getElementById("output1").innerText = "X";
        // document.getElementById("output2").innerText = "O";
        keuze = true;
    }
}

function Switch1() {

    if (keuze1 == true) {
        document.getElementById("output1").innerText = "X";
        keuze1 = false;
    } else {
        document.getElementById("output1").innerText = "O";
        keuze1 = true;
        // }else if(keuze1 == undefined) {
        //     document.getElementById("output1").innerText = "*";
        // }

    }

    function Switch2() {

        if (keuze1 == true) {
            document.getElementById("output2").innerText = "X";
            keuze1 = false;
        } else {
            document.getElementById("output2").innerText = "O";
            keuze1 = true;
        }

    }

    function Switch3() {

        if (keuze1 == true) {
            document.getElementById("output3").innerText = "X";
            keuze1 = false;
        } else {
            document.getElementById("output3").innerText = "O";
            keuze1 = true;
        }


    }

    function Switch4() {
        if (keuze1 == true) {
            document.getElementById("output4").innerText = "X";
            keuze1 = false;
        } else {
            document.getElementById("output4").innerText = "O";
            keuze1 = true;
        }
    }

    function Switch5() {
        if (keuze1 == true) {
            document.getElementById("output5").innerText = "X";
            keuze1 = false;
        } else {
            document.getElementById("output5").innerText = "O";
            keuze1 = true;
        }
    }

    function Switch6() {
        if (keuze1 == true) {
            document.getElementById("output6").innerText = "X";
            keuze1 = false;
        } else {
            document.getElementById("output6").innerText = "O";
            keuze1 = true;
        }
    }

    function Switch7() {
        if (keuze1 == true) {
            document.getElementById("output7").innerText = "X";
            keuze1 = false;
        } else {
            document.getElementById("output7").innerText = "O";
            keuze1 = true;
        }
    }

    function Switch8() {
        if (keuze1 == true) {
            document.getElementById("output8").innerText = "X";
            keuze1 = false;
        } else {
            document.getElementById("output8").innerText = "O";
            keuze1 = true;
        }
    }

    function Switch9() {
        if (keuze1 == true) {
            document.getElementById("output9").innerText = "X";
            keuze1 = false;
        } else {
            document.getElementById("output9").innerText = "O";
            keuze1 = true;
        }
    }


}
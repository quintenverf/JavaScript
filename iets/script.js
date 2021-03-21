let keuze = true;
let keuze1 = true;

let turn = 0

function tick () {
    target = document.getElementById("turn")
    target.innerText = turn
}


for (i=1; i<=9;i++) {
    klikTarget = "klik"+i
    console.log(klikTarget)

    f = function (i) {
        return () => {
            elemTarget = "output" + (i);

            elem = document.getElementById(elemTarget);
            player = (turn % 2 == 0) ? 1 : 2

            if (elem.innerText == "*") {
                switch (player) {
                    case 1:
                        elem.innerText = "O"
                        break;
                    case 2:
                        elem.innerText = "X"
                        break;
                }
                turn++
            } else {
                console.log("Click another cell")
            }
            console.log(elemTarget + " " + i)
            tick()
        }
    }

    document.getElementById(klikTarget).addEventListener("click", f(i));
}


tick()
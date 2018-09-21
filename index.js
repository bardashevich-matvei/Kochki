const add = document.getElementById("add");
const close = document.getElementById("close");
const kletki = document.getElementsByClassName("cell");
const lowjump = document.getElementById("lowJump");
const jump = document.getElementById("jump");
const highjump = document.getElementById("highJump");
const start = document.getElementById("start");
const und = document.getElementById("undo");
const visited = document.getElementsByClassName("visit");
const mas = document.getElementById("mas");
const mas2 = document.getElementById("mas2");



function undos() {
    if (pos[pos.length - 1] != 0) {
        const person = document.querySelector(".person");
        visited[visited.length - 1].removeChild(person);
        visited[visited.length - 2].appendChild(person);
        visited[visited.length - 1].classList.remove("visit");
        k.pop();
        pos.pop();
        if (k[k.length - 1] === 1) {
            lowjump.removeEventListener("click", low_jump);
            lowjump.style.opacity = "0.4";
        }
        if (k[k.length - 1] > 1) {
            lowjump.addEventListener("click", low_jump);
            lowjump.style.opacity = "1";
        }
        lowjump.innerHTML = "Слабый прыжок=" + (k[k.length - 1] - 1);
        jump.innerHTML = "Средний прыжок=" + k[k.length - 1];
        highjump.innerHTML = "Сильный прыжок=" + (k[k.length - 1] + 1);
        obn();
    }
};


var k = [];
var pos = [];
k.push(1);
pos.push(0);

lowjump.innerHTML = "Слабый прыжок=" + (k[k.length - 1] - 1);
jump.innerHTML = "Средний прыжок=" + k[k.length - 1];
highjump.innerHTML = "Сильный прыжок=" + (k[k.length - 1] + 1);
lowjump.style.opacity = "0.4";
jump.style.opacity = "0.4";
highjump.style.opacity = "0.4";
und.style.opacity = "0.4";

function obn() {
    mas.innerHTML = pos;
    mas2.innerHTML = k;
};

function Start() {
    if (kletki[0].classList.contains("active")) {
        const div = document.createElement("div");
        div.classList = "person";
        kletki[0].appendChild(div);
        kletki[0].classList.add("visit");
        lowjump.style.opacity = "0.4";
        start.style.opacity = "0.4";
        add.style.opacity = "0.4";
        close.style.opacity = "0.4";
        highjump.style.opacity = "0.4";
        jump.style.opacity = "1";
        und.style.opacity = "1";
        jump.addEventListener("click", normal_jump);

        lowjump.addEventListener("click", low_jump);
        und.addEventListener("click", undos);
        highjump.addEventListener("click", high_jump);

        lowjump.removeEventListener("click", low_jump);
        highjump.removeEventListener("click", high_jump);
        start.removeEventListener("click", Start);
        add.removeEventListener("click", addCell);
        document.body.removeEventListener("click", addActive);
        close.removeEventListener("click", deleteCell);
        obn();
    }
};
start.addEventListener("click", Start);
add.addEventListener("click", addCell);
close.addEventListener("click", deleteCell);

function addCell() {
    document.body.appendChild(qwe());
};


function deleteCell() {
    document.body.removeChild(kletki[kletki.length - 1])
};

function addActive(event) {
    if (event.target.classList.contains("cell"))
        event.target.classList.toggle("active");
};

document.body.addEventListener("click", addActive);

function qwe() {
    const button = document.createElement("div");
    button.classList = "cell";
    return button;
};


function normal_jump() {
    if (kletki[pos[pos.length - 1] + k[k.length - 1]].classList.contains("active")) {
        const person = document.querySelector(".person");
        kletki[pos[pos.length - 1]].removeChild(person);
        kletki[pos[pos.length - 1] + k[k.length - 1]].appendChild(person);
        kletki[pos[pos.length - 1] + k[k.length - 1]].classList.add("visit");
        pos.push(pos[pos.length - 1] + k[k.length - 1]);
        k.push(k[k.length - 1]);
    } else {
        alert("Нельзя совершить этот прыжок!");
    }
    highjump.addEventListener("click", high_jump);
    highjump.style.opacity = "1";
    if (pos[pos.length - 1] === kletki.length - 1) {
        alert("Вы прошли!!!");
    }
    obn();
};


function low_jump() {
    if (kletki[pos[pos.length - 1] + k[k.length - 1] - 1].classList.contains("active")) {
        const person = document.querySelector(".person");
        kletki[pos[pos.length - 1]].removeChild(person);
        kletki[pos[pos.length - 1] + k[k.length - 1] - 1].appendChild(person);
        kletki[pos[pos.length - 1] + k[k.length - 1] - 1].classList.add("visit");
        pos.push(pos[pos.length - 1] + k[k.length - 1] - 1);
        k.push(k[k.length - 1] - 1);
    } else {
        alert("Нельзя совершить этот прыжок");
    }
    if (k[k.length - 1] === 1) {
        lowjump.removeEventListener("click", low_jump);
        lowjump.style.opacity = "0.4";
    }
    lowjump.innerHTML = "Слабый прыжок=" + (k[k.length - 1] - 1);
    jump.innerHTML = "Средний прыжок=" + k[k.length - 1];
    highjump.innerHTML = "Сильный прыжок=" + (k[k.length - 1] + 1);
    if (pos[pos.length - 1] === kletki.length - 1) {
        alert("Вы прошли!!!");
    }
    obn();
};




function high_jump() {
    if (kletki[pos[pos.length - 1] + k[k.length - 1] + 1].classList.contains("active")) {
        const person = document.querySelector(".person");
        kletki[pos[pos.length - 1]].removeChild(person);
        kletki[pos[pos.length - 1] + k[k.length - 1] + 1].appendChild(person);
        kletki[pos[pos.length - 1] + k[k.length - 1] + 1].classList.add("visit");
        pos.push(pos[pos.length - 1] + k[k.length - 1] + 1);
        k.push(k[k.length - 1] + 1);
    } else {
        alert("Нельзя совершить этот прыжок");
    }
    lowjump.innerHTML = "Слабый прыжок=" + (k[k.length - 1] - 1);
    jump.innerHTML = "Средний прыжок=" + k[k.length - 1];
    highjump.innerHTML = "Сильный прыжок=" + (k[k.length - 1] + 1);
    if (k[k.length - 1] > 1) {
        lowjump.addEventListener("click", low_jump);
        lowjump.style.opacity = "1";
    }
    if (pos[pos.length - 1] === kletki.length - 1) {
        alert("Вы прошли!!!");
    }
    obn();
};
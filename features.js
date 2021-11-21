let input = document.getElementById("input");
let list = document.getElementById("list");
let id = 1;
let k = Object.keys(localStorage);
k.sort();

if (localStorage.length > 0) {
    // finding last id
    id = Number(k[k.length - 1]) + 1;
}

function save(x) {
    localStorage.setItem(id, x);
    id++;
}

function showList() {
    console.log(k);
    k.map(function (el) {
        addToList(localStorage.getItem(el), el);
    });
}

function addToList(x, y) {
    let li = document.createElement("li");
    let text = document.createTextNode(" - " + x);
    let btn = document.createElement("button");
    let btnText = document.createTextNode("delete");
    btn.appendChild(btnText);
    btn.setAttribute("onclick", "del(" + y + ")");
    li.appendChild(btn);
    li.appendChild(text);
    li.setAttribute("id", "list-" + y);
    list.appendChild(li);
    input.value = "";
}

function del(x) {
    localStorage.removeItem(x);
    let current = document.getElementById("list-" + x);
    current.remove();
}

document.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        let note = input.value;
        addToList(note);
        save(note);
        console.log(note);
    }
});

showList();


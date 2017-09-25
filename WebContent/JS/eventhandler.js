// Formel ->  kg/(m*m)
"use strict";
let height = 0;
let weight = 0;
let heightObj = document.getElementById('height');
let weightObj = document.getElementById('weight');
let calcBmi = function() {
    height = heightObj.value;
    weight = weightObj.value;
    let bmi = weight / (height * height);
    let bmiObj = document.getElementById('bmi');
    bmiObj.innerHTML = Math.round(bmi * 10) / 10;
}

heightObj.addEventListener("change", calcBmi);
weightObj.addEventListener("change", calcBmi);
heightObj.addEventListener("keyup", calcBmi);
weightObj.addEventListener("keyup", calcBmi);

let mulitArr = [
    ['Jens', 'Karla'],
    ['Tobi', 'Nicole']
];
let kursLenght = 0;
let out = 'In den Kurs sind folgende Teilnehmer: ';
for (let kurs of mulitArr) {
    kursLenght = kurs.length;
    for (let person of kurs) {
        out = out + person + ', ';
    }
};
let out1 = 'Es gibt ' + mulitArr.length + ' kurse  mit jeweils ' + kursLenght + ' Teilnehmer';
console.log(out1);
console.log(out);

let bool = [true, false];
let tbody = document.getElementById('body');
for (let check of bool) {
    for (let check2 of bool) {
        let tr = document.createElement('tr');
        let td0 = document.createElement('td');
        td0.innerHTML = check;
        let td1 = document.createElement('td');
        td1.innerHTML = check2;
        let td01 = document.createElement('td');
        td01.innerHTML = check && check2;

        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td01);

        tbody.appendChild(tr);
    }
}
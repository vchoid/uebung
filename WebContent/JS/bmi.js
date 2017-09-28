// Formel ->  kg/(m*m)
"use strict";

jQuery(document).ready(function() {

    let height = 0;
    let weight = 0;
    let heightObj = $('#height');
    let weightObj = $('#weight');

    let calcBmi = function() {
        console.log("calc your bmi");
        height = parseFloat(heightObj.val().replace(",", "."));
        weight = parseFloat(weightObj.val());

        let bmi = weight / (height * height);
        let result = Math.round(bmi * 10) / 10;

        $('#result').text(("" + result).replace(".", ","));

        $('#normal, #below, #above').hide();



        if (result < 18.5) {
            $('#below').show()
        } else if (result >= 18.5 && result <= 25) {
            $('#normal').show()

        } else if (!(isNaN(result)) && result > 25) {
            $('#above').show();

        }


    }

    heightObj.change(calcBmi);
    weightObj.change(calcBmi);
    heightObj.keyup(calcBmi);
    weightObj.keyup(calcBmi);


});






/* 
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
 */
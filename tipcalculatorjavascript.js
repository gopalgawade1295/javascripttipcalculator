function tipcalculator() {
    var billamount1 = document.getElementById("billamount").value;
    var service1 = document.getElementById("service").value;
    var people1 = document.getElementById("people").value;
    if (people1 === "" || people1 <= 1) {
        people1 = 1;
        document.getElementById("each").style.display = "none";
    }
    else {
        document.getElementById("each").style.display = "block";
    }
    var total = (billamount1 * service1) / people1;
    total = Math.round(total * 100) / 100;
    total = total.toFixed();
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("calculate").onclick = function () {
    tipcalculator();
}

!(function () {
    "use strict";
    function e(e, n) {
        let c = document.getElementById(e),
            o = (parseInt(c.value) || 1) + n;
        o < 1 && (o = 1), o > 99 && (o = 99), (c.value = o), t();
    }
    function t() {
        let e = document.getElementById("price1").innerText.replace("£", ""),
            t = document.getElementById("price2").innerText.replace("£", ""),
            n = e * (parseFloat(document.getElementById("amount1").value) || 1),
            c = t * (parseFloat(document.getElementById("amount2").value) || 1),
            o = n + c;
        (document.getElementById("result1").innerText = "£" + n.toFixed(2)),
            (document.getElementById("result2").innerText = "£" + c.toFixed(2)),
            (document.getElementById("result").innerText = "£" + o.toFixed(2));
    }
    (function () {
        const e = document.querySelector(".mobile-nav-btn"),
            t = document.querySelector(".mobile-nav"),
            n = document.querySelector(".nav-icon");
        e.onclick = function () {
            console.log("click"),
                t.classList.toggle("mobile-nav--open"),
                n.classList.toggle("nav-icon--active"),
                document.body.classList.toggle("no-scroll");
        };
    })(),
        document
            .getElementById("increase1")
            .addEventListener("click", function () {
                e("amount1", 1);
            }),
        document
            .getElementById("decrease1")
            .addEventListener("click", function () {
                e("amount1", -1);
            }),
        document
            .getElementById("increase2")
            .addEventListener("click", function () {
                e("amount2", 1);
            }),
        document
            .getElementById("decrease2")
            .addEventListener("click", function () {
                e("amount2", -1);
            }),
        t();
})();

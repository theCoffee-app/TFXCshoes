var runHist = document.getElementById("run-hist") ;
var pr = document.getElementById("pr");
var showBtn = document.getElementById("see-hist-btn");

showBtn.addEventListener("click", showRunHist);

function showRunHist () {
    if (pr.style.display === "none" && runHist.style.display === "none") {
            pr.style.display = "block";
            runHist.style.display = "block";
    } else {
        pr.style.display = "none";
        runHist.style.display = "none";
    }

}


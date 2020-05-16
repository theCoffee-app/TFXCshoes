var allButton = document.getElementById("allBtn");
var trainButton = document.getElementById("trainBtn");
var reviewButton = document.getElementById("reviewBtn");
var leakButton = document.getElementById("leakBtn");

var leakCards = document.getElementById("sneakLeaks");
var trainCards = document.getElementById("training");
var reviewCards = document.getElementById("review");


allButton.addEventListener("click", showAll);
trainButton.addEventListener("click", showTrain);
reviewButton.addEventListener("click", showReview);
leakButton.addEventListener("click", showLeak);

// allButton.addEventListener("click", setActive);
// trainButton.addEventListener("click", setActive);
// reviewButton.addEventListener("click", setActive);
// leakButton.addEventListener("click", setActive);


function showAll() {
    $(".card").css("display", "block");    
}

function showTrain() {
    
    if (trainCards.style.display === "none" || trainCards.style.display === "null") {
        $("div").filter("#training").css("display", "block");
        $("div").filter("#review, #sneakLeaks").css("display", "none");
    }
    else {
        $("div").filter("#review, #sneakLeaks").css("display", "none");
    }
}

function showReview() {
    
    if (reviewCards.style.display === "none" || reviewCards.style.display === "null") {
        $("div").filter("#review").css("display", "block");
        $("div").filter("#training, #sneakLeaks").css("display", "none");
    }
    else {
        $("div").filter("#training, #sneakLeaks").css("display", "none");
    }        
}

function showLeak() {

    if (leakCards.style.display === "none" || leakCards.style.display === "null") {
        $("div").filter("#sneakLeaks").css("display", "block");
        $("div").filter("#training, #review").css("display", "none");
    }     
    else {
         $("div").filter("#training, #review").css("display", "none");          
    } 
}



// function setActive() {
//     //var navLink = document.getElementsByClassName('nav-link');
    
//     if (this.className === "nav-link active") {
//     //if (this.className === "nav-link" && this.className === "active") {
//         this.className = "nav-link";
//         console.log("You aren't active");
//     } else {
//         this.className += " active";
//         console.log("You're Active!");
//     }
// }

//TODO: add loop to check if button is greater than zero, than add active

var filters = document.getElementById("blogFilters");
var filterBtns = document.getElementsByClassName("nav-link");

for(var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function() {        
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";              
    });
}
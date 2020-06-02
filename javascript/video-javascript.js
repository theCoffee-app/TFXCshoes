var videoCard = document.getElementById("videoBtn");
var videoCard1 = document.getElementById("videoBtn1");
var videoDesc = document.getElementById("video-desc");
var videoDesc1 = document.getElementById("video-desc1");

// videoCard.addEventListener("click", showDesc("video-desc"));
// videoCard1.addEventListener("click", showDesc("video-desc1"));
var row = document.getElementsByClassName("row-video");
var row1 = document.getElementById("row1");
var seeMoreBtn = document.getElementById("see-more");
var seeLessBtn = document.getElementById("see-less");
seeMoreBtn.addEventListener("click", showMore);
seeLessBtn.addEventListener("click", showLess);

function showDesc(vidDescId) {  
    var desc = document.getElementById(vidDescId);      
    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";       
    }
};

    
function showMore() {    
    row1.style.height = "auto";
    row1.style.overflow = "visible";              
if(row1.style.overflow = "visible") {
        // seeMoreBtn.textContent = "See Less";
        seeMoreBtn.style.display = "none";
        seeLessBtn.style.display = "inline-block";
    } else {
        seeMoreBtn.textContent = "See More";
    }
};

function showLess() {
    row1.style.height = "400px";
    row1.style.overflow = "hidden"
    seeLessBtn.style.display = "none";
    seeMoreBtn.style.display = "inline-block";
    document.body.scrollTop = 100;
    document.documentElement.scrollTop = 100;
};


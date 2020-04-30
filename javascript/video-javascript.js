var videoCard = document.getElementById("videoBtn");
var videoCard1 = document.getElementById("videoBtn1");
var videoDesc = document.getElementById("video-desc");
var videoDesc1 = document.getElementById("video-desc1");

// videoCard.addEventListener("click", showDesc("video-desc"));
// videoCard1.addEventListener("click", showDesc("video-desc1"));


function showDesc(vidDescId) {  
    var desc = document.getElementById(vidDescId);      
    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";       
    }
}


    


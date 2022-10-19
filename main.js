const undreadNotifications = document.querySelectorAll(".unread");

addCircles();

function addCircles(){
undreadNotifications.forEach(elem => {
    const newSpan = document.createElement("span");
    newSpan.classList.add("dot");
    elem.querySelector(".message").appendChild(newSpan);
})
}



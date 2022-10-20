const undreadNotifications = document.querySelectorAll(".unread");
const button = document.querySelector("button");
const count = document.getElementById("notification-count");

// on page load
addCircles();

button.addEventListener("click", () => {
    //remove custom styling
    undreadNotifications.forEach(element => {
        element.classList.remove("unread");
    })
    // change Notification count
    count.textContent = "0";

})
function addCircles(){
undreadNotifications.forEach(elem => {
    const newSpan = document.createElement("span");
    newSpan.classList.add("dot");
    elem.querySelector(".message").appendChild(newSpan);
})
}



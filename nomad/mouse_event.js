const title = document.querySelector(".hello:first-child h1");

title.addEventListener("click", () => {
    // title.style.color = "blue";
    console.log("mouse is clicked!");
});

title.addEventListener("mouseenter", () => {
    title.style.color = "red";
    console.log("mouse is here!");
});

title.addEventListener("mouseleave", () => {
    title.style.color = "blue";
    console.log("mouse is gone!");
});
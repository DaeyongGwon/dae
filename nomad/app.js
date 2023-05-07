const title = document.querySelector(".hello:first-child h1");

title.addEventListener("click", () => {
    title.innerText = "clicked!";
    title.style.color = "purple";
    console.log("clicked!");
});

title.addEventListener("mouseenter", () => {
    title.innerText = "mouse is here!";
    title.style.color = "red";
    console.log("mouse is here!");
});

title.addEventListener("mouseleave", () => {
    title.innerText = "mouse is gone!";
    title.style.color = "blue";
    console.log("mouse is gone!");
});


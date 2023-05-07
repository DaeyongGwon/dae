const h1 = document.querySelector(".hello:first-child h1");

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copied!");
}
function handleWindowOffline() {
    alert("offline!");
}
function handleWindowOnline() {
    alert("online!");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
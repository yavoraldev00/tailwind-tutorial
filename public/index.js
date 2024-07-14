const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
    (nav.classList.contains("hidden")) ? nav.classList.remove("hidden") : nav.classList.add("hidden");
})
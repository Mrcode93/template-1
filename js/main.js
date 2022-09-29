let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector("ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("show");
});

function getRepository() {
    fetch("https://api.github.com/users/Mrcode93/repos")
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".number span").innerHTML = data.length;
        });
}
document.addEventListener("DOMContentLoaded", getRepository);

let skill = document.querySelectorAll(".skill span");
for (let i = 0; i < skill.length; i++) {
    let num = 0;

    setInterval(() => {
        num = skill[i].getAttribute("data");
        skill[i].innerText = num + " %";
    }, 100);
}
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const sideMenu = document.querySelector("#sideMenu");

openMenu.addEventListener("click", () => {
    openMenu.style.display = 'none';
    closeMenu.style.display = "block";
    sideMenu.style.right = "0";
})

function hidemenu() {
    sideMenu.style.right = "-100%"
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
}

closeMenu.addEventListener("click", hidemenu);

document.addEventListener("click", (event) => {
    if (window.innerWidth < 875 && !sideMenu.contains(event.target) && event.target != openMenu) {
        hidemenu();
    }
});
window.addEventListener("scroll", (event) => {
    if (window.innerWidth < 875) {
        hidemenu();
    }
})

window.addEventListener('resize', function () {
    if (window.innerWidth > 875) {
        openMenu.style.display = 'none';
    } else { openMenu.style.display = 'block' }
});
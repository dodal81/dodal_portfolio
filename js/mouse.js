
// document.body.style.cursor = 'none';
const cursor = document.querySelector(".cursor");
let mouse = {};

window.addEventListener("mousemove", e=>{
    mouse = {
        x : e.clientX,
        y : e.clientY
    }
    moveCursor();
})
window.addEventListener("scroll", moveCursor);

function moveCursor() {
    cursor.style.left = mouse.x + -15 + 'px';
    cursor.style.top = mouse.y + scrollY + -15 + 'px';
}
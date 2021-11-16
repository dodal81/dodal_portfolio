
// document.body.style.cursor = 'none';

const result = document.querySelector(".result");

document.addEventListener("mousemove", (e) => {
    e.preventDefault();
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    result.style.left = mouseX + -20 +'px';
    result.style.top = mouseY + -10 + 'px';


    console.log(mouseX);
    console.log(mouseY);
});

const CanvasWidth = 720;
const CanvasHeight = 1080;

window.addEventListener("load", () => {
    let canvas = document.getElementById("mycanvas");
    let ctx = canvas.getContext("2d");
    canvas.width = CanvasWidth;
    canvas.height = CanvasHeight;
    canvas.onclick = (e) => calc(ctx, mousePoint(e));
    calc_display(ctx);
});
// mouse point
function point() {
    this.x = 0;
    this.y = 0;
}

// mouse move event
function mousePoint(event) {
    let mouse = new point();
    mouse.x = Math.round((event.clientX) / (document.body.clientWidth / CanvasWidth));
    mouse.y = Math.round((event.clientY) / (document.body.clientHeight / CanvasHeight));
    return mouse
}

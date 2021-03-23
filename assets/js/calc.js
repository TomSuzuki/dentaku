const ButtonSize = CanvasWidth / 4;

// global（めんどーになった）
var display_text = ""
var sum = 0;
var flg = 0;

function calc(ctx, mouse) {
    // mouse point
    let n = 4 * Math.floor((mouse.y - (CanvasHeight - CanvasWidth)) / ButtonSize) + Math.floor(mouse.x / ButtonSize);

    // event
    if (n == 00) display_text = display_text + "7"
    else if (n == 01) display_text = display_text + "8"
    else if (n == 02) display_text = display_text + "9"
    else if (n == 03) {
        display_text = ""
        sum = 0
    }
    else if (n == 04) display_text = display_text + "4"
    else if (n == 05) display_text = display_text + "5"
    else if (n == 06) display_text = display_text + "6"
    else if (n == 08) display_text = display_text + "1"
    else if (n == 09) display_text = display_text + "2"
    else if (n == 10) display_text = display_text + "3"
    else if (n == 12) display_text = display_text + "0"
    else if (n == 13) display_text = display_text + "00"
    else if (n == 14) display_text = display_text.slice(0, -1);
    else if (n == 15 || n == 07 || n == 11) {
        if (flg == 0) {
            sum = Number(display_text);
            display_text = "";
        } else {
            sum = sum + flg * Number(display_text)
            flg = 0;
        }
        if (n == 07) flg = 1
        if (n == 11) flg = -1
        if (n == 15) display_text = String(sum)
    }

    console.log(display_text, sum);

    // display
    calc_display(ctx);
}

function calc_display(ctx) {
    // background
    ctx.fillStyle = "rgb(192, 192, 192)";
    ctx.fillRect(0, 0, CanvasWidth, CanvasHeight);

    // display
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, CanvasWidth, CanvasHeight - CanvasWidth);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.textAlign = "right";
    ctx.textBaseline = "ideographic";
    ctx.font = "96px sans-serif";
    ctx.fillText(display_text, CanvasWidth * 0.97, CanvasHeight - CanvasWidth, CanvasWidth * 0.97, CanvasHeight - CanvasWidth);

    // button
    button_display(ctx, 00, "7");
    button_display(ctx, 01, "8");
    button_display(ctx, 02, "9");
    button_display(ctx, 03, "CL");
    button_display(ctx, 04, "4");
    button_display(ctx, 05, "5");
    button_display(ctx, 06, "6");
    button_display(ctx, 07, "+");
    button_display(ctx, 08, "1");
    button_display(ctx, 09, "2");
    button_display(ctx, 10, "3");
    button_display(ctx, 11, "-");
    button_display(ctx, 12, "0");
    button_display(ctx, 13, "00");
    button_display(ctx, 14, "BS");
    button_display(ctx, 15, "=");
}

function button_display(ctx, n, text) {
    let x = n % 4;
    let y = Math.floor(n / 4);
    let px = x * ButtonSize + ButtonSize / 2;
    let py = y * ButtonSize + ButtonSize / 2 + (CanvasHeight - CanvasWidth);

    ctx.fillStyle = "rgb(172, 172, 172)";
    ctx.fillRect(px - (ButtonSize / 2) * 0.9, py - (ButtonSize / 2) * 0.9, ButtonSize * 0.9, ButtonSize * 0.9);

    ctx.fillStyle = `rgb(0, 0, 0)`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "48px sans-serif";
    ctx.fillText(text, px, py, ButtonSize * 0.8, ButtonSize * 0.8);
}
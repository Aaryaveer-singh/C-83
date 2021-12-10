canvas = document.getElementById("myCanvas");
pen = canvas.getContext("2d");
pen_color = "green";
width = 2;
previous_touch_x = "";
previous_touch_y = "";

if (screen.width < 992) {
    canvas.width = screen.width - 70;
    canvas.height = screen.height - 300;
    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart", touch_start);

function touch_start(e) {
    previous_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    previous_touch_y = e.touches[0].clientY - canvas.offsetTop;
    pen_color = document.getElementById("color").value;
    width = document.getElementById("width").value;
}

canvas.addEventListener("touchmove", touch_move)

function touch_move(e) {
    current_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_touch_y = e.touches[0].clientY - canvas.offsetTop;

    pen.beginPath();
    pen.strokeStyle = pen_color;
    pen.lineWidth = width;
    pen.moveTo(previous_touch_x, previous_touch_y);
    pen.lineTo(current_touch_x, current_touch_y);
    pen.stroke();
    previous_touch_x = current_touch_x;
    previous_touch_y = current_touch_y;
}

function clearcanvas() {
    pen.clearRect(0, 0, 800, 600);
}

canvas.addEventListener("mousedown",mouse_down);

function mouse_down(e){
    mouse_event="mousedown";
    console.log(mouse_event);
    pen_color=document.getElementById("color").value;
    width=document.getElementById("width").value;
}
canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e){
    mouse_event="mouseleave";
    console.log(mouse_event);
}
canvas.addEventListener("mouseup",mouse_up)
function mouse_up(e){
mouse_event="mouseup";
console.log(mouse_event);
}
canvas.addEventListener("mousemove",mouse_move)
function mouse_move(e){
    current_mouse_x=e.clientX-canvas.offsetLeft;
    current_mouse_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        pen.beginPath();
        pen.strokeStyle=pen_color;
        pen.lineWidth=width;
        pen.moveTo(previous_mouse_x,previous_mouse_y);
        pen.lineTo(current_mouse_x,current_mouse_y);
        pen.stroke();
    }
    previous_mouse_x=current_mouse_x;
    previous_mouse_y=current_mouse_y;
}






const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#3fff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
];

let isPainting = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
}

function onLineWidthCahnge(event) {
  ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidthCahnge);

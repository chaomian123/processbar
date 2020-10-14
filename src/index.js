import "./styles.css";

let input = document.querySelector("#range");
let body = document.querySelector("body");
let bar = document.querySelector(".process-bar");
let img = document.querySelector(".img-right");
input.addEventListener("input", (e) => {
  console.log(e.target.value);
  let v = e.target.value;
  let n = Number(v) + 2;
  // body.style.setProperty("--size-right", v + "%");
  body.style.setProperty("--size-right", v + "%");
  // img.style.setProperty("--size-right", v + "%");
  body.style.setProperty("--size-line", n + "%");
  body.style.setProperty("--size-left", 100 - v + "%");
  // img.style.setProperty("--size-left", 100 - v + "%");
});

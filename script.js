"use strict";
let img = document.getElementById("img");
let loader = document.getElementById("uploadImg");
let send = document.getElementById("save");

console.log(img);
console.log(loader);
loader.addEventListener("change", function () {

    const file = this.files[0];

    const url = URL.createObjectURL(file);

    img.src = url;

    img.onload = function () {
        URL.revokeObjectURL(url);
    };
});
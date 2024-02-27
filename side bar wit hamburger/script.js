
let start = document.getElementById('start');
let close = document.getElementById('close');
let box = document.querySelector(".box");

start.addEventListener('click', ()=>{
    start.style.display = 'none'
    box.style.display = 'block'
});
close.addEventListener('click', ()=>{
    start.style.display = 'block'
    box.style.display = 'none'
});

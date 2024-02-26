let start = document.getElementById('start')
let stop = document.getElementById('stop')
let bgcolor = document.querySelector('body');
let text = document.querySelector('h2');
let interval;
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

let changeColor = ()=>{
    bgcolor.style.backgroundColor = randomColor()
 };

start.addEventListener('click',()=>{
    if(!interval){
        interval = setInterval(changeColor, 100)
        text.innerHTML = "Enjoy the party 😁😁...";
    }
})

stop.addEventListener('click', ()=>{
    bgcolor.style.backgroundColor = "#FFFFFF"
    clearInterval(interval);
    interval = null;
    text.innerHTML = "Party ends☹️☹️...";

});
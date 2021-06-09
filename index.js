// select all keys on keybord
const keys = document.querySelectorAll("span");

// and event listener on all keys
keys.forEach( key => {
    key.addEventListener('click', e =>{
       path = './notes/' + e.target.id +'.mp3';
       var note = new Audio();
       note.src = path;
       note.play();
    })
})

//list of colors
const colors = ["#3d4555", "#b0b2c8","#e7e9ee", "#d2e4e8","#feebe0","#8b9dc3","#3b5998"];

// select color changer button
const col_btn = document.getElementById("btn1");

//add event listener to change color
col_btn.addEventListener('click', () =>{
    sharps = document.querySelectorAll('.black');
    var i = Math.floor(Math.random() * (colors.length))
    sharps.forEach(sharp => {
        sharp.style.background = colors[i];
    });
})

const crz_btn = document.getElementById("btn2");

crz_btn.addEventListener('click', () =>{
    sharps = document.querySelectorAll('.black');
    sharps.forEach(sharp => {
        var i = Math.floor(Math.random() * (colors.length))
        sharp.style.background = colors[i];
    });
})





var startBtn = document.getElementById("start-btn")
var instructionBtn = document.getElementById("instruction-btn")

startBtn.addEventListener('click', (e) =>{
    window.location.href = "./user.html";
})

instructionBtn.addEventListener('click', (e)=>{
    window.location.href = "./instructions.html";
})

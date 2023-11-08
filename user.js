const Uname=document.getElementById('player-name')
const squadName=document.getElementById('player-squad')
const Button=document.getElementById('play-now')

Button.onclick=()=>{
    if(Uname.value == '' || squadName.value == ''){
    alert('Please enter valid Details')}
else{
    location.href = "./game.html"
}
}




























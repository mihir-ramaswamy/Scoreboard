let phome = document.getElementById("point1home");
let phome2 = document.getElementById("point2home");
let phome3 = document.getElementById("point3home");

let pguest1 = document.getElementById("point1guest");
let pguest2 = document.getElementById("point2guest");
let pguest3 = document.getElementById("point3guest");
let newGame = document.getElementById("new-game")

let scoreHome = document.getElementById("scorebox-home");
let scoreGuest = document.getElementById("scorebox-guest");

document.addEventListener("click", checkWinner)

newGame.addEventListener("click", function(){
            scoreHome.innerHTML = "0"
            scoreGuest.innerHTML = "0"
            home.style.background = null;
            guest.style.background = null;
            winG.textContent = "Tie";
            winH.textContent = "Tie";
})
phome.addEventListener("click", function(){
            scoreHome.innerHTML = (parseInt(scoreHome.innerHTML, 10)+1).toString()
})
phome2.addEventListener("click", function(){
            scoreHome.innerHTML = (parseInt(scoreHome.innerHTML, 10)+2).toString()

})
phome3.addEventListener("click", function(){
            scoreHome.innerHTML = (parseInt(scoreHome.innerHTML, 10)+3).toString()

})
pguest1.addEventListener("click", function(){
            scoreGuest.innerHTML = (parseInt(scoreGuest.innerHTML, 10)+1).toString()

})
pguest2.addEventListener("click", function(){
             scoreGuest.innerHTML = (parseInt(scoreGuest.innerHTML, 10)+2).toString()

})
pguest3.addEventListener("click", function(){
             scoreGuest.innerHTML = (parseInt(scoreGuest.innerHTML, 10)+3).toString()

})
const home = document.querySelector(".home")
const guest = document.querySelector(".guest")
const winG = document.querySelector("#winguest")
const winH = document.querySelector("#winhome")
function checkWinner() {
    if(parseInt(scoreHome.innerHTML, 10)>parseInt(scoreGuest.innerHTML, 10))
    {
         home.style.background = "#4CB944";
         guest.style.background = null;
         winH.textContent = "WINNER"
         winG.textContent = ""
    }
    else if(parseInt(scoreHome.innerHTML, 10)<parseInt(scoreGuest.innerHTML, 10))
    {
        guest.style.background = "#4CB944";
        home.style.background = null;
        winG.textContent = "WINNER"
        winH.textContent = ""
    }
}

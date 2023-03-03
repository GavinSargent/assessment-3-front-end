const favColorBtn = document.getElementById('color')
const favPlaceBtn = document.getElementById('place')
const favRitualBtn = document.getElementById('ritual')

function favColorClick (){
    alert('Turquoise')
}

function favPlaceClick(){
    alert("Fremont Lake, Wyoming")
}

function favRitualClick (){
    alert("Gaming with the squad")
}

favColorBtn.addEventListener("click", favColorClick)
favPlaceBtn.addEventListener("click", favPlaceClick)
favRitualBtn.addEventListener("click", favRitualClick)
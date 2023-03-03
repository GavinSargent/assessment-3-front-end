console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully');
}

function ducky (){
	alert("You're hott")
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let rubberDuck = document.getElementById('ducky')

rubberDuck.addEventListener("mouseover", ducky)
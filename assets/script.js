const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// -------------------------------------------------Variables----------------------------------------------------------------


const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const dots = document.querySelector(".dots")
const tagLine = document.querySelector("#banner p")
const imgBanner = document.querySelector("#banner .banner-img")
let currentSlide = 0


// -------------------------------------------------EventListener----------------------------------------------------------------


arrowLeft.addEventListener("click",clickArrowLeft)
arrowRight.addEventListener("click",clickArrowRight)


// -------------------------------------------------Boucle----------------------------------------------------------------

for (let bullet = 0; bullet < slides.length; bullet++){
		const dot = document.createElement("div")
		dot.className = "dot"
		dots.append(dot)
}

const dotAll = document.querySelectorAll(".dot")
dotAll[0].classList.add("dot_selected")



// -------------------------------------------------FUNCTION----------------------------------------------------------------


function dotMove(){
	for (let i = 0; i < dotAll.length; i++ ){
		dotAll[i].classList.remove("dot_selected")
	}
    dotAll[currentSlide].classList.add("dot_selected");
}


function clickArrowRight(){
	currentSlide++
	if(currentSlide === slides.length){
		currentSlide = 0
		}
		console.log(currentSlide)
		imgBanner.src = slides[currentSlide].image
		tagLine.innerHTML = slides[currentSlide].tagLine
		dotMove()
}

function clickArrowLeft(){
	currentSlide--
	if(currentSlide < 0){
		currentSlide = slides.length -1
	}
		console.log(currentSlide)
		tagLine.innerHTML = slides[currentSlide].tagLine
		imgBanner.src = slides[currentSlide].image
		dotMove()
}

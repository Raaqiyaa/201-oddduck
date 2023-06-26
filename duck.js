// global variables
const duckContainer = document.querySelector("section")
const resultsButton = document.querySelector("section + div")
const image1 = document.querySelector("section img: first-child")
const image2 = document.querySelector ("section img: second-child")
const image3 = document.querySelector("section img: third-child")

// setting inital count 
let clicks = 0
// goal is 25 clicks
const maxClicksAllowed = 5

// declaring variable
let allDucks = []

// random number function 
function getRandomNumber() {
    return Math.floor(math.random() * allDucks.length)
}

//constructor function 
function duck(name, src) {
    this.name = name
    this.img = img
    this.clicks = 0
    this.views = 0
    allDucks.push(this)
}

//generate number to reference the duck to render on page
function renderDucks() {
    let duck1 = getRandomNumber()
    let duck2 = getRandomNumber()
    let duck3 = getRandomNumber()
}

// to stop same image appearing 
while (duck1 === duck2) {
    duck2 = getRandomNumber()
}
while (duck2 === duck3) {
    duck3 = getRandomNumber()
}

//setting attribute 
image1.src = allDucks [duck1].src
image2.src = allDucks [duck2].src
image3.src = allDucks [duck3].src
image1.alt = allDucks [duck1].name
image2.alt = allDucks [duck2].name
image3.alt = allDucks [duck3].name
allDucks[duck1].views++
allDucks[duck2].views++
allDucks[duck3].views++

//click function 
function handleDuckClick(event) {
if (event.target === duckContainer)
    alert("please click on a image")
} 
else {
    clicks++
    console.log(clicks)
let clickedDuck = event.target.alt
    for (let i = 0; i < allDucks.length; 1++) {
        if (clickedduck === allDucks[i].name) {
    allDucks[i].clicks++
    break
    } 
}
}

if (clicks === maxClicksAllowed) {
    duckContainer.removeEventListener("click", handleGoatClick)
    goatContainer.className = "no-voting"
    resultsButton.addEventListener("click", renderResults)
    resultsButton.classmame = "clicks-allowed"
} else {
    renderDucks()
    }

function renderResult() {
console.log("your results are in!")
    let ul = document.querySelector("ul")
    for (let i = 0; i < allDucks.length; 1++) {
        let li = document.createElement("li")
        li.textContent = '${allDucks[i].name} had ${allducks[i].views} views and was clicked ${'allDucks[i].clicks} times.'
        ul.appendChild(li)
    
}
    

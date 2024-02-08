
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

let resultDisplay = document.getElementById('result')
const gridDisplay = document.querySelector("#grid")
let cardChosen = []
let cardChosenIds = []
const cardWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        card.style.width = "200px"
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checMathch(){
    let cards = document.querySelectorAll("#grid img")
    
    let optiononeId = cardChosenIds[0]
    let optiontwoId = cardChosenIds[1]

    
    if(cardChosen[0] == cardChosen[1]){
        cards[optiononeId].setAttribute('src', 'images/white.png')
        cards[optiontwoId].setAttribute('src', 'images/white.png')
        cards[optiononeId].removeEventListener('click', flipCard)
        cards[optiontwoId].removeEventListener('click', flipCard)
        cardWon.push(cardChosen)
        
    }else{
        cards[optiononeId].setAttribute('src', 'images/blank.png')
        cards[optiontwoId].setAttribute('src', 'images/blank.png')
    }

    resultDisplay.textContent = cardWon.length
    cardChosen = []
    cardChosenIds = []
    if(cardWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Tebrikler kazandınız'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardChosen.length == 2) {
        setTimeout(checMathch, 500)
    }
}

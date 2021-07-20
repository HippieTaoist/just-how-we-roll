/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
 ********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
    const byNumber = function(item1, item2) {
        return item1 - item2;
    }

    return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

let rando = 0 //random number temp
const resetMe = document.querySelector('#reset-button')

// d6 variables
const d6Button = document.querySelector('#d6-roll')
let d6Mean = document.getElementById('d6-rolls-mean')
let d6Median = document.getElementById('d6-rolls-median')
let d6Mode = document.getElementById('d6-rolls-mode')


// double d6 variables
const doubleD6Button = document.querySelector('#double-d6')
const doubleD6Button1 = document.querySelector('#double-d6-roll-1')
const doubleD6Button2 = document.querySelector('#double-d6-roll-2')
let doubleD6Mean = document.getElementById('double -d6-rolls-mean')
let doubleD6Median = document.getElementById('double-d6-rolls-median')
let doubleD6Mode = document.getElementById('double-d6-rolls-mode')


// d12 Variables
const d12Button = document.querySelector('#d12-roll')
let d12Mean = document.getElementById('d12-rolls-mean')
let d12Median = document.getElementById('d12-rolls-median')
let d12Mode = document.getElementById('d12-rolls-mode')

//d20 Variables
const d20Button = document.querySelector('#d20-roll')
let d20Mean = document.getElementById('d20-rolls-mean')
let d20Median = document.getElementById('d20-rolls-median')
let d20Mode = document.getElementById('d20-rolls-mode')
resetMePlease()


/*******************
 * EVENT LISTENERS *
 *******************/
d6Button.addEventListener('click', d6Clicker)

doubleD6Button.addEventListener('click', doubleD6ButtonClicker)

d12Button.addEventListener('click', d12ButtonClicker)

d20Button.addEventListener('click', d20ButtonClicker)

resetMe.addEventListener('click', resetMePlease)



/******************
 * RESET FUNCTION *
 ******************/
function resetMePlease() {
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
    d6Button.src = './images/start/d6.png'
    doubleD6Button1.src = './images/start/d6.png'
    doubleD6Button2.src = './images/start/d6.png'
    d12Button.src = './images/start/d12.jpeg'
    d20Button.src = './images/start/d20.jpg'
    console.log('resetMePlease')
}



/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/
function d6Clicker() {
    rando = getRandomNumber(6)
    sixes.push(rando)
    console.log('sixes', sixes)
    d6Mean.innerText = meaner(sixes);
    d6Median.innerText = medianer(sixes);
    d6Mode.innerText = moder(sixes);
    d6Mode.innerText = moder(sixes);

}


// Look into more - Not setup right. calling two 6 rolls
// Use d6ButtonCLicker Function
function doubleD6ButtonClicker() {
    console.log('doubleD6Clicker')
    rando = getRandomNumber(6)
    doubleSixes.push(rando)
    console.log('doublesixes', doubleSixes)
    doubleD6Mean.innerText = meaner(doubleSixes);
    doubleD6Median.innerText = medianer(doubleSixes);
    doubleD6Mode.innerText = moder(doubleSixes);


}

function d12ButtonClicker() {
    console.log('d12ButtonClicker')
    rando = getRandomNumber(12)
    twelves.push(rando)
    console.log('twelves', twelves)
    d12Mean.innerText = meaner(twelves);
    d12Median.innerText = medianer(twelves);
    d12Mode.innerText = moder(twelves);
    d12Mode.innerText = moder(twelves);

}

function d20ButtonClicker() {
    console.log('d20ButtonClicker')
    rando = getRandomNumber(20)
    twenties.push(rando)
    console.log('twenties', twenties)
    d20Mean.innerText = meaner(twenties);
    d20Median.innerText = medianer(twenties);
    d20Mode.innerText = moder(twenties);
    d20Mode.innerText = moder(twenties);

}

/****************
 * MATH SECTION *
 ****************/
function meaner(numArr) {
    console.log('Meaner Function')
    let addDiv = 0
    for (let number = 0; number < numArr.length; number++) {
        addDiv = +numArr[number];
    }
    let mean = addDiv / numArr.length
    return mean
}

// Find median of a set of numbers. (middle number / mean of middle two if array length is even.
function medianer(numArr) {
    console.log('Medianer Function')
    if (numArr % 2 === 0) {
        // do the mean calc on middle teo numbers
        let midTwo = []
        let midTwoStart = numArr.length / 2
        midTwo.push(midTwoStart)
        midTwo.push(midTwoStart + 1)
        console.log(midTwo)
        return meaner(midTwo)
    } else {
        if (numArr.length === 1) {
            return numArr[0]
        } else {
            let median = numArr[numArr.length / 2]
            return Math.ceil(median);
        }
    }
}

function moder(numArr) {
    console.log('Moder Function')
}
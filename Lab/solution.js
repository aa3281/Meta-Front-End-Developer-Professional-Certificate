// Task 1
const dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

let text = "";
function logDairy() {
    for (let x of dairy) {
        console.log(x);
        text += x;
    }
}

logDairy();

// Task 2

const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    let birdProperties = Object.keys(bird);
    let birdPropertiesValues = Object.values(bird);

    for (key of birdProperties) {
        console.log(key, ": ",bird[key])
    }
}

birdCan();

// Task 3


function animalCan() {


    for (property in bird) {
        console.log(property, ": ", bird[property])
    }
}

animalCan()

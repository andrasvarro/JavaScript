class Greeter {
    element: HTMLElement;
    span: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "Bezabáltam: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
    }

    start(food: string, energy: number) {
        this.span.innerHTML = "Our " + food + " has " + energy + " calories.";
    }
}
var burger: string = 'hamburger',     // String 
    calories: number = 300,           // Numeric
    tasty: boolean = true;            // Boolean

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start(burger, calories);
};


const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error: A kitty contst, de a belseje mégis változtatható (lásd lent)
//kitty = {
//    name: "Danielle",
//    numLives: numLivesForCat
//};

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;



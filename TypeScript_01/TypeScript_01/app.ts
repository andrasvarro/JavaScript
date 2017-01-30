class Greeter {
    element: HTMLElement;
    span: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "Bezabáltam: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
    }

    // We tell our function to expect an object that fulfills the Food interface. 
    // This way we know that the properties we need will always be available.
    start(food: Food) {
        this.span.innerHTML = "Our " + food.name + " has " + food.calories + " calories.";
    }
}

// Here we define our Food interface, its properties, and their types.
interface Food {
    name: string;
    calories: number;
}

// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
    name: "ice cream",
    calories: 200
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start(ice_cream);
};


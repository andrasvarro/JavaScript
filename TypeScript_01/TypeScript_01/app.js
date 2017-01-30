var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "Bezabáltam: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
    }
    Greeter.prototype.start = function (food, energy) {
        this.span.innerHTML = "Our " + food + " has " + energy + " calories.";
    };
    return Greeter;
}());
var burger = 'hamburger', // String 
calories = 300, // Numeric
tasty = true; // Boolean
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start(burger, calories);
};
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
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
//# sourceMappingURL=app.js.map
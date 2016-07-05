class Greeter {

    constructor() {
        console.log("Heello");
    }


}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter();
};
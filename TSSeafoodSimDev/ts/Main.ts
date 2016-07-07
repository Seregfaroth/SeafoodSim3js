/// <reference path = "../externals/controller.d.ts"/>

class Main {
    private m_controller: Controller;

    constructor() {
        console.log("loading Game");
        this.m_controller = new Controller();
    }

}

window.onload = () => {
    console.log("window loaded");
    var main = new Main();    
}
/// <reference path = "../externals/controller.d.ts"/>
/// <reference path = "../externals/test.d.ts"/>

class Main {
    private m_controller;

    constructor() {
        console.log("loading Game");
        //this.m_controller = new Controller();
        this.m_controller = new Init1();
        this.m_controller.renderLoop();
        //this.m_controller.rl();
        new TestSchool();
    }

}

window.onload = () => {
    console.log("window loaded");
    var t = new Main();    
}
/// <reference path = "../externals/controller.d.ts"/>
/// <reference path = "../externals/test.d.ts"/>

class Main {
    private m_controller: Controller;

    constructor() {
        console.log("loading Game");
      
        new Test();
    }

}

window.onload = () => {
    console.log("window loaded");
    var main = new Main();    
}
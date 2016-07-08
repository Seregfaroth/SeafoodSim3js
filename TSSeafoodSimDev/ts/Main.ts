/// <reference path = "../externals/controller.d.ts"/>
/// <reference path = "../externals/test.d.ts"/>

class Main {
    private m_controller: Controller;

    constructor(p_test: boolean) {
        console.log("loading Game");
        this.m_controller = new Controller();
        //this.m_controller = new Init1();
        //this.m_controller.renderLoop();
        //this.m_controller.rl();
        if (p_test) 
            new Test();
    }

}


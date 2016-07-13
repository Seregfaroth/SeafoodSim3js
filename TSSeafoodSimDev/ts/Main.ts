/// <reference path = "../externals/controller.d.ts"/>
/// <reference path = "../externals/test.d.ts"/>
/// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
class Main {
    private m_controller: Controller;

    constructor(p_test: boolean) {
        console.log("loading Game");
        //var p = new TKN_PathFinding();
        //var navMatrix = [
        //    [0, 1, 0, 0, 0, 1, 0, 0],
        //    [0, 1, 0, 1, 0, 1, 0, 0],
        //    [0, 1, 0, 1, 0, 1, 0, 0],
        //    [0, 1, 0, 1, 0, 1, 0, 0],
        //    [0, 0, 0, 1, 0, 0, 0, 0]
        //];
        //p.navTable = navMatrix;
        //var f = p.findPath(0, 0, 6, 4);
        //debugger;
        this.m_controller = new Controller();
        
        if (p_test) 
            new Test();
    }

}


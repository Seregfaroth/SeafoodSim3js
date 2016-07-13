/// <reference path = "../../TSSeafoodSimDev/externals/model.d.ts"/>
/// <reference path = "../../TSSeafoodSimDev/externals/view.d.ts"/>
/// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
enum simState { starting, running, paused, ending }
class Controller {
    private m_view: MainView;
    private m_model: Model;
    private m_eventHandler: EventHandler;
    private m_timer: number;
    private m_fastTimer: number;

    private m_simState: simState;
    private m_delayPerTick: number;
    constructor() {
        console.log("Controller loading");
        this.m_simState = simState.starting;
        this.m_delayPerTick = 1000;
        this.m_model = new Model();
        this.m_view = new MainView(this.m_model.getMap(), this.m_model.getShipOwners()); 
        this.m_eventHandler = new EventHandler(this);
        //debugger;
        //if (this.m_model != undefined && this.m_view != undefined) {
        //    //debugger;
        //    this.runSimulation(5, 2000);
            
        }
        this.simulationTick = this.simulationTick.bind(this);
    }

    public getModel(): Model {
        return this.m_model;
    }

    public getEventHandler(): EventHandler {
        return this.m_eventHandler;
    }
    simulationTick = () => {
        debugger;
        console.log("Controller running simulationtick");
        
        this.m_model.run();
        this.m_view.updateMainView(this.m_model.getMap());
        this.m_simState = simState.running;
    }

    runSimulation(p_ticks?: number) {
        if (this.m_timer == undefined) {
            this.m_timer = setInterval(this.simulationTick.bind(this), 1000);
        }
        /*
        var ticksLeft;
        if (p_ticks != undefined)
            ticksLeft = p_ticks;
        else
            ticksLeft = 10;
        //debugger;
        while (ticksLeft > 0) {
            //debugger;
            this.simulationTick();
            ticksLeft--;
            //console.log("ticksleft: " + ticksLeft);
            
            //debugger;

        }*/
    }  

    public pause(): void {
        clearInterval(this.m_timer);
        this.m_timer = undefined;
    }

    public fastForward(): void {

    }
}



//class Init1 {
//    //private m_renderer: THREE.WebGLRenderer;
//    //private m_camera: THREE.Camera;
//    //private m_scene: THREE.Scene;
//    //private m_sphere: THREE.Mesh;
//    private m_renderer: TKN_Renderer;
//    private m_camera: TKN_Camera;
//    private m_scene: TKN_Scene;
//    private m_mesh: TKN_Mesh;

//    constructor() {
//        //var t5 = new Greeter();

//        //console.log("construct init xxx");
//        //var nav = [[1, 0, 0], [0, 1, 0]];
//        //var tt = new TKN_PathFinding(nav);
//        //var ttt = tt.findPath(0, 0, 2, 0);
//        //console.log(ttt);
//        //ttt = tt.findPath(-5, -10, 12, 11);
//        //console.log(ttt);
//        //this.m_renderer = new THREE.WebGLRenderer({ alpha: true });
//        this.m_renderer = new TKN_Renderer();
//        this.m_renderer.m_renderer.setSize(300, 300);
//        //this.m_camera = new THREE.PerspectiveCamera(154, 1, 0.3, 1000);
//        this.m_camera = new TKN_Camera();
//        //this.m_camera.m_camera.lookAt(new THREE.Vector3(0, 0, 0));
//        this.m_camera.m_camera.position.z = 24;
//        ////var tm = new THREE.Vector3(0, 30, -25);
//        ////
//        ////tm = this.m_camera.position;
//        ////this.m_camera.upda
//        ////this.m_scene = newTHREE.Scene();
//        this.m_scene = new TKN_Scene();
//        ////this.m_renderer.setClearColor(0x000000, 1);

//        document.body.insertBefore(this.m_renderer.m_renderer.domElement, document.body.firstChild);

//        ////var sG = new THREE.SphereGeometry(20,80,24);
//        ////var sM = new THREE.MeshBasicMaterial({
//        ////    color: 0xFF0000, wireframe: true       
//        ////});
//        ////this.m_sphere = new THREE.Mesh(sG, sM);
//        ////this.m_camera.position.z = -5;
//        ////s.position = new THREE.Vector3(0, 100, 100);
//        //this.m_mesh = new TKN_Mesh();


//        this.m_scene.m_scene.add(this.m_mesh.m_mesh);
//        this.rl = this.rl.bind(this.rl);

//    }
//    renderLoop = () => {
//        requestAnimationFrame(this.renderLoop);
//        var t = this.m_mesh.m_mesh.rotation.x;
//        this.m_mesh.m_mesh.rotation.y += 0.001;
//        this.m_renderer.m_renderer.render(this.m_scene.m_scene, this.m_camera.m_camera);
//    }
//    rl() {
//        requestAnimationFrame(this.rl);
//        var t = this.m_mesh.m_mesh.rotation.x;
//        this.m_mesh.m_mesh.rotation.y += 0.001;
//        this.m_renderer.m_renderer.render(this.m_scene.m_scene, this.m_camera.m_camera);
//    }
//};

//window.onload = () => {
//    //var el = document.getElementById('content');
//    //var greeter = new Greeter1();
//};
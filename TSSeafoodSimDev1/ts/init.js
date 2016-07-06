/// <reference path = "Declarations/three.d.ts"/>
/// <reference path = "../../TSSeafoodSimDevModel/app.ts"/>
var Init = (function () {
    function Init() {
        var t5 = new Greeter();
        console.log("construct init");
        var nav = [[1, 0, 0], [0, 1, 0]];
        var tt = new TKN_PathFinding(nav);
        var ttt = tt.findPath(0, 0, 2, 0);
        console.log(ttt);
        ttt = tt.findPath(-5, -10, 12, 11);
        console.log(ttt);
        this.m_renderer = new THREE.WebGLRenderer({ alpha: true });
        this.m_renderer.setSize(800, 800);
        this.m_camera = new THREE.PerspectiveCamera(154, 1, 0.3, 1000);
        this.m_camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.m_camera.position.z = 24;
        var tm = new THREE.Vector3(0, 30, -25);
        //
        tm = this.m_camera.position;
        //this.m_camera.upda
        this.m_scene = new THREE.Scene();
        this.m_renderer.setClearColor(0x000000, 1);
        document.body.insertBefore(this.m_renderer.domElement, document.body.firstChild);
        var sG = new THREE.SphereGeometry(20, 80, 24);
        var sM = new THREE.MeshBasicMaterial({
            color: 0xFF0000, wireframe: true
        });
        var s = new THREE.Mesh(sG, sM);
        //this.m_camera.position.z = -5;
        s.position = new THREE.Vector3(0, 100, 100);
        this.m_scene.add(s);
        this.m_renderer.render(this.m_scene, this.m_camera);
    }
    return Init;
}());
;
window.onload = function () {
    console.log("window loaded");
    var t = new Init();
    //var f = new TH
};
//# sourceMappingURL=init.js.map
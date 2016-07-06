/// <reference path = "../externals/wrappers.d.ts"/>
/// <reference path = "../externals/model.d.ts"/>
var Init = (function () {
    function Init() {
        //var t5 = new Greeter();
        var _this = this;
        this.renderLoop = function () {
            requestAnimationFrame(_this.renderLoop);
            var t = _this.m_mesh.m_mesh.rotation.x;
            _this.m_mesh.m_mesh.rotation.y += 0.001;
            _this.m_renderer.m_renderer.render(_this.m_scene.m_scene, _this.m_camera.m_camera);
        };
        //console.log("construct init xxx");
        //var nav = [[1, 0, 0], [0, 1, 0]];
        //var tt = new TKN_PathFinding(nav);
        //var ttt = tt.findPath(0, 0, 2, 0);
        //console.log(ttt);
        //ttt = tt.findPath(-5, -10, 12, 11);
        //console.log(ttt);
        //this.m_renderer = new THREE.WebGLRenderer({ alpha: true });
        this.m_renderer = new TKN_Renderer();
        this.m_renderer.m_renderer.setSize(800, 800);
        //this.m_camera = new THREE.PerspectiveCamera(154, 1, 0.3, 1000);
        this.m_camera = new TKN_Camera();
        this.m_camera.m_camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.m_camera.m_camera.position.z = 24;
        //var tm = new THREE.Vector3(0, 30, -25);
        //
        //tm = this.m_camera.position;
        //this.m_camera.upda
        //this.m_scene = newTHREE.Scene();
        this.m_scene = new TKN_Scene();
        //this.m_renderer.setClearColor(0x000000, 1);
        document.body.insertBefore(this.m_renderer.m_renderer.domElement, document.body.firstChild);
        //var sG = new THREE.SphereGeometry(20,80,24);
        //var sM = new THREE.MeshBasicMaterial({
        //    color: 0xFF0000, wireframe: true       
        //});
        //this.m_sphere = new THREE.Mesh(sG, sM);
        //this.m_camera.position.z = -5;
        //s.position = new THREE.Vector3(0, 100, 100);
        this.m_mesh = new TKN_Mesh();
        this.m_scene.m_scene.add(this.m_mesh.m_mesh);
    }
    return Init;
}());
;
//window.onload = () => {
//    console.log("window loaded");
//    var t = new Init();
//    t.renderLoop();
//}; 
//# sourceMappingURL=init.js.map
/// <reference path = "Declarations/three.d.ts"/>
//
class TKN_Scene {
    public m_scene: THREE.Scene;
    constructor() {
        console.log("Test1 construct");
        this.m_scene = new THREE.Scene();
    }
}

class TKN_Camera {
    public m_camera: THREE.Camera;
    constructor() {
        this.m_camera = new THREE.PerspectiveCamera(60, 1, 0.3, 1000);
    }
}

class TKN_Renderer {
    public m_renderer: THREE.WebGLRenderer;
    constructor() {
        this.m_renderer = new THREE.WebGLRenderer();
    }
}

class TKN_Geometry {
    public m_geometry: THREE.Geometry;
    constructor() {
        this.m_geometry = new THREE.SphereGeometry(1, 24, 24);
    }
}

class TKN_material {

}//

class TKN_Mesh {
    public m_mesh: THREE.Mesh;
    public m_material: THREE.MeshBasicMaterial;
    public m_geometry: THREE.Geometry;
    constructor() {
        this.m_material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        this.m_geometry = new THREE.SphereGeometry(5, 24, 12);
        this.m_mesh = new THREE.Mesh(this.m_geometry, this.m_material);
    }
}


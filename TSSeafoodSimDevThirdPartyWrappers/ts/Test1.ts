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
        this.m_camera.position.z = 10;
    }
}

class TKN_Renderer {
    public m_renderer: THREE.WebGLRenderer;
    constructor() {
        console.log("Construct TKN_Rendeerer");
        this.m_renderer = new THREE.WebGLRenderer();
        this.m_renderer.setSize(700, 700);
    }
}

class TKN_Geometry {
    public m_geometry: THREE.Geometry;
    constructor(p_size: number = 0.8) {
        //this.m_geometry = new THREE.SphereGeometry(1, 24, 24);
        this.m_geometry = new THREE.PlaneGeometry(p_size, p_size);
    }
}
enum e_color { Green, Blue, Red, Yellow, White, Black }; 

class TKN_material {
    public m_material: THREE.MeshBasicMaterial;
    constructor(p_color: e_color) {
        this.m_material = new THREE.MeshBasicMaterial();
        switch (p_color) {            
            case e_color.Green: this.m_material.color.setHex(0x00ff00); break;
            case e_color.Blue: this.m_material.color.setHex(0x0000ff); break;
            case e_color.Red: this.m_material.color.setHex(0xff0000); break;
            case e_color.Yellow: this.m_material.color.setHex(0xffff00); break;
            case e_color.White: this.m_material.color.setHex(0xffffff); break;
            case e_color.Black: this.m_material.color.setHex(0x000000); break;
            default: this.m_material.color.setHex(0xff00ff); break;
        }
    }
}

class TKN_Mesh {
    public m_mesh: THREE.Mesh;
    public m_position: Point; 
    public m_geometry: THREE.Geometry;
    constructor(p_geometry: TKN_Geometry, p_material: TKN_material) {
        this.m_mesh = new THREE.Mesh(p_geometry.m_geometry, p_material.m_material);
        this.m_position = new Point(0,0);
    }
    setPosition(p_row, p_col) {
        this.m_position.row = p_row;
        this.m_position.col = p_col;
        this.m_mesh.position.x = p_col-4;
        this.m_mesh.position.y = 4-p_row;
        //this.m_mesh.position.y = p_z;
    }
}


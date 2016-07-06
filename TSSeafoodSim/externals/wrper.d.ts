/// <reference path="../../TSWrappers/ts/Declarations/three.d.ts" />
declare class TKN_Scene {
    m_scene: THREE.Scene;
    constructor();
}
declare class TKN_Camera {
    m_camera: THREE.Camera;
    constructor();
}
declare class TKN_Renderer {
    m_renderer: THREE.WebGLRenderer;
    constructor();
}
declare class TKN_Geometry {
    m_geometry: THREE.Geometry;
    constructor();
}
declare class TKN_material {
}
declare class TKN_Mesh {
    m_mesh: THREE.Mesh;
    m_material: THREE.MeshBasicMaterial;
    m_geometry: THREE.Geometry;
    constructor();
}

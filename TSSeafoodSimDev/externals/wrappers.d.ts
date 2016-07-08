/// <reference path="../../TSSeafoodSimDevThirdPartyWrappers/ts/Declarations/three.d.ts" />
declare class Point {
    row: number;
    col: number;
    constructor(p_row: number, p_col: number);
}
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
declare enum e_color {
    Green = 0,
    Blue = 1,
    Red = 2,
    Yellow = 3,
}
declare class TKN_material {
    m_material: THREE.MeshBasicMaterial;
    constructor(p_color: e_color);
}
declare class TKN_Mesh {
    m_mesh: THREE.Mesh;
    m_position: Point;
    m_geometry: THREE.Geometry;
    constructor(p_geometry: TKN_Geometry, p_material: TKN_material);
    setPosition(p_row: any, p_col: any): void;
}

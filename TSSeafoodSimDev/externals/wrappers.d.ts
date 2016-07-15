/// <reference path="../../TSSeafoodSimDevThirdPartyWrappers/ts/Declarations/three.d.ts" />
declare class Point2 {
    row: number;
    col: number;
    constructor(p_row: number, p_col: number);
    compare(p_com: Point2): boolean;
    manhattanDistTo(p_point: Point2): number;
}
declare class Point3 {
    row: number;
    col: number;
    depth: number;
    constructor(p_row: number, p_col: number, p_depth: number);
    compare(p_com: Point3): boolean;
}
declare class TKN_Scene {
    private m_scene;
    constructor();
    scene: THREE.Scene;
    add(p_mesh: TKN_Mesh): void;
}
declare class TKN_Camera {
    private m_camera;
    private m_position;
    constructor();
    position: Point3;
    camera: THREE.Camera;
    lookAt(p_point: Point3): void;
}
declare class TKN_Renderer {
    private m_renderer;
    constructor();
    render(p_cam: TKN_Camera, p_scene: TKN_Scene): void;
    domElement: any;
}
declare class TKN_Geometry {
    m_geometry: THREE.Geometry;
    constructor(p_size?: number);
    geometry: THREE.Geometry;
}
declare enum e_color {
    Green = 0,
    Blue = 1,
    Red = 2,
    Yellow = 3,
    White = 4,
    Black = 5,
}
declare class TKN_material {
    private m_material;
    constructor(p_color: e_color);
    material: THREE.Material;
}
declare class TKN_Mesh {
    private m_mesh;
    private m_position;
    private m_geometry;
    private m_material;
    constructor(p_geometry: TKN_Geometry, p_material: TKN_material);
    position: Point2;
    mesh: THREE.Mesh;
}
declare class TKN_PathFinding {
    private m_finder;
    private m_navGrid;
    constructor();
    findPath(p_origin: Point2, p_dest: Point2): Point2[];
    navTable: number[][];
}

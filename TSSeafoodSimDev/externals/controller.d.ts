/// <reference path="test.d.ts" />
declare class Controller {
    constructor();
}
declare class Init1 {
    private m_renderer;
    private m_camera;
    private m_scene;
    private m_mesh;
    constructor();
    renderLoop: () => void;
}

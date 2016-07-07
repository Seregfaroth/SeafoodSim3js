/// <reference path="model.d.ts" />
/// <reference path="view.d.ts" />
/// <reference path="wrappers.d.ts" />
declare class Controller {
    private m_view;
    private m_model;
    constructor();
    simulationTick(): void;
    runSimulation(p_ticks?: number): void;
}
declare class Init1 {
    private m_renderer;
    private m_camera;
    private m_scene;
    private m_mesh;
    constructor();
    renderLoop: () => void;
    rl(): void;
}

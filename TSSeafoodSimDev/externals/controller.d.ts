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

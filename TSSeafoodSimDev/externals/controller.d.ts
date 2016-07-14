/// <reference path="model.d.ts" />
/// <reference path="view.d.ts" />
/// <reference path="wrappers.d.ts" />
declare enum simState {
    starting = 0,
    running = 1,
    paused = 2,
    ending = 3,
    fast = 4,
}
declare class Controller {
    private m_view;
    private m_model;
    private m_eventHandler;
    private m_timer;
    private m_fastTimer;
    private m_simState;
    private m_delayPerTick;
    private m_fastDelayPerTick;
    constructor();
    getModel(): Model;
    getEventHandler(): EventHandler;
    getSimState(): simState;
    getMainView(): MainView;
    simulationTick: () => void;
    runSimulation: (p_ticks?: number) => void;
    pause(): void;
    fastForward(): void;
}
declare class EventHandler {
    private m_controller;
    constructor(p_controller: Controller);
    bindFunctions(): void;
    unBindFunctions(): void;
    setTax: (p_n: number) => void;
    updateTaxValue: (p_n: number) => void;
    setQuote: (owner: string, p_n: number) => void;
    updateQuoteValue: (owner: string, p_n: number) => void;
    setEffortLimit: (owner: string, p_n: number) => void;
    updateEffortLimitValue: (owner: string, p_n: number) => void;
    setLandingDistrubution: (site: string, p_n: number) => void;
    updateLandingValue: (site: string, p_n: number) => void;
    start: () => void;
    pause: () => void;
    fastForward: () => void;
    restrictArea: (p_tile: Tile) => void;
}

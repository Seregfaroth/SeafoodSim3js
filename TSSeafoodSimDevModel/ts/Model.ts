/// <reference path = "Map.ts"/>
/// <reference path = "Government.ts"/>
/// <reference path = "ShipOwner.ts"/>

class Model {
    private m_map: Map;
    private m_shipOwner: ShipOwner;
    private m_goverment: Government;
    private m_ai: AI;

    constructor() {
        console.log("constructing model");
        this.m_map = new Map(8, 4, new Restrictions());
        this.m_shipOwner = new ShipOwner(new Point(3,3));
        this.m_goverment = new Government();
        this.m_ai = new AI();
    }

    run() {
        console.log("running model");
        this.m_map.run();
        this.m_ai.run(this.m_shipOwner, this.m_map);
    }

    getMap(): Map {
        return this.m_map;
    }
}
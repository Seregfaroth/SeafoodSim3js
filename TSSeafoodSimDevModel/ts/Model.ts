/// <reference path = "Map.ts"/>
/// <reference path = "Government.ts"/>
/// <reference path = "ShipOwner.ts"/>

class Model {
    private m_map: Map;
    private m_shipOwner: ShipOwner;
    private m_goverment: Government;

    constructor() {
        console.log("constructing model");
        this.m_map = new Map(8, 4, null);
        this.m_shipOwner = new ShipOwner();
        this.m_goverment = new Government();
    }

    run() {
        console.log("running model");
    }

    getMap(): Map {
        return this.m_map;
    }
}
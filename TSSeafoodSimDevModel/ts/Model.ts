/// <reference path = "Map.ts"/>
/// <reference path = "Government.ts"/>
/// <reference path = "ShipOwner.ts"/>

class Model {
    private m_map: Map;
    private m_shipOwners: ShipOwner[] = [];
    private m_goverment: Government;
    private m_ai: AI;

    constructor() {
        console.log("constructing model");
        this.m_map = new Map(10,5, new Restrictions());
        this.m_goverment = new Government();
        this.m_ai = new AI();
        this.createShipOwner(new Point2(3, 3));
    }

    public run() {
        console.log("running model");
        this.m_map.run();
        for (var i = 0; i < this.m_shipOwners.length; i++) {
            this.m_ai.run(this.m_shipOwners[i], this.m_map);
        }
        this.updateScore();
    }

    public getMap(): Map {
        return this.m_map;
    }

    public getGovernment(): Government {
        return this.m_goverment;
    }
    public createShipOwner(p_startingPoint: Point2) {
        this.m_shipOwners.push(new ShipOwner(p_startingPoint, "shipOwner" + this.m_shipOwners.length));
    }
    public updateScore(): void {
        var gov: Government = this.getGovernment();

        //Financial score
        this.m_map.getLandingSites().forEach(function (ls) {
            gov.financialTransaction(ls.tax(gov.getTaxingRate()));
        });
    }
    
}
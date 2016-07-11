/// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
class AI {
     private m_balanceToBuyShip: number = 10000;
     private m_balanceToSellShip: number = 0;
    private m_fishingPath: Point2[] = [new Point2(1, 0), new Point2(1, 1), new Point2(1, 2), new Point2(1, 3), new Point2(1, 4), new Point2(2, 4),
        new Point2(3, 4), new Point2(3, 3), new Point2(3, 2), new Point2(3, 1), new Point2(3, 0), new Point2(2, 0)];

    public run(p_shipOwner: ShipOwner, p_map: Map): void {
        this.buyOrSellShip(p_shipOwner, p_map);
        this.runShips(p_shipOwner, p_map);
    }

    private buyOrSellShip(p_shipOwner: ShipOwner, p_map: Map): void {
        var possibleToBuyShip: boolean = p_map.getNoOfShips() < p_map.getRestrictions().getMaxShips();
        if (possibleToBuyShip && p_shipOwner.getBalance() > this.m_balanceToBuyShip) {
            p_map.addShip(p_shipOwner.buyShip());
        }
        else if (p_shipOwner.getShips().length > 0 && p_shipOwner.getBalance() < this.m_balanceToSellShip) {
            var ship: Ship = p_shipOwner.getShips()[0];
            p_shipOwner.sellShip(ship);
            p_map.removeShip(ship);
        }
    }

    private runShips(p_shipOwner: ShipOwner, p_map: Map): void {
        var ai: AI = this;
        p_shipOwner.getShips().forEach(function (ship) {
            if (ship.getPath() != undefined) {
                if (ship.getPath().length > 1) {
                    ship.fish(p_map);
                    ship.followPath();
                }
                else {
                    ship.setPath(ai.m_fishingPath);
                }
            }
        });
    }

    private findLandingSite(p_map: Map): Point2 {
        for (var row = 0; row < p_map.getMapHeight(); row++) {
            for (var col = 0; col < p_map.getMapWidth(); col++) {
                if (p_map.getTile(new Point2(row, col)) instanceof LandingSite) {
                    return new Point2(row, col);
                }
            }
        }
    }

    private findFuelSite(p_map: Map): Point2 {
        for (var row = 0; row < p_map.getMapHeight(); row++) {
            for (var col = 0; col < p_map.getMapWidth(); col++) {
                if (p_map.getTile(new Point2(row, col)) instanceof FuelSite) {
                    return new Point2(row, col);
                }
            }
        }
    }
}
 class AI {
     private m_balanceToBuyShip: number = 10000;
     private m_balanceToSellShip: number = 0;
    private m_fishingPath: Point[] = [new Point(1, 0), new Point(1, 1), new Point(1, 2), new Point(1, 3), new Point(1, 4), new Point(2, 4),
        new Point(3, 4), new Point(3, 3), new Point(3, 2), new Point(3, 1), new Point(3, 0), new Point(2, 0)];

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
            if (ship.getPath().length > 1) {
                ship.fish(p_map);
                ship.followPath();
            }
            else {
                ship.setPath(ai.m_fishingPath);
            }
        });
    }

    private findLandingSite(p_map: Map): Point {
        for (var row = 0; row < p_map.getMapHeight(); row++) {
            for (var col = 0; col < p_map.getMapWidth(); col++) {
                if (p_map.getTile(new Point(row, col)) instanceof LandingSite) {
                    return new Point(row, col);
                }
            }
        }
    }

    private findFuelSite(p_map: Map): Point {
        for (var row = 0; row < p_map.getMapHeight(); row++) {
            for (var col = 0; col < p_map.getMapWidth(); col++) {
                if (p_map.getTile(new Point(row, col)) instanceof FuelSite) {
                    return new Point(row, col);
                }
            }
        }
    }
}
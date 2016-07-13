/// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
class AI {
     private m_balanceToBuyShip: number = 1000000;
     private m_balanceToSellShip: number = 0;
    private m_fishingPath: Point2[] = [new Point2(1, 0), new Point2(1, 1), new Point2(1, 2), new Point2(1, 3), new Point2(1, 4), new Point2(2, 4),
        new Point2(3, 4), new Point2(3, 3), new Point2(3, 2), new Point2(3, 1), new Point2(3, 0), new Point2(2, 0)];

    public run(p_shipOwner: ShipOwner, p_map: Map): void {
        console.log("runnig AI");
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
           /* if (ship.hasReachedGoal()) {
                //If ship has reached a previous sat goal
                var tile: Tile = p_map.getTile(ship.getPosition());
                if (tile instanceof LandingSite) {
                    //If ship has reached a landing site
                    ship.land(tile);
                    ship.emptyPath();
                }
                else if (tile instanceof FuelSite) {
                    //If ship has reached fuel site
                    ship.refuel(tile);
                    ship.emptyPath();
                }
            }

            try {
                ship.followPath()
            }
            catch (e) {
                //If ship has no path to follow
                var nearestFuel: Point2 = ai.findNearestFuelSite(ship.getPosition(), p_map);
                var fuelPath: Point2[] = ai.pathFinding(ship.getPosition(), nearestFuel);
                if (ship.getFuel() < fuelPath.length * ship.getFuelPerMove()) {
                    //Ship must refuel if fuel is too low
                    ship.setPath(fuelPath);
                }
                else if (ship.getCargo().length > ship.getCargoCapacity() * 0.9) {
                    //If ship is more than 90% full, ship must land
                    var landingPoint: Point2 = ai.findNearestLandingSite(ship.getPosition(), p_map);
                    var landingPath: Point2[] = ai.pathFinding(ship.getPosition(), landingPoint);
                    var fuelPoint: Point2 = ai.findNearestFuelSite(landingPoint, p_map);
                    var sailingDistanceToRefuel: number = landingPath.length + ai.pathFinding(landingPoint, fuelPoint).length;
                    if (ship.getFuel() < sailingDistanceToRefuel * ship.getFuelPerMove()) {
                        //If ship cannot reach lanidng site and reach nearest fuel site with current fuel it must refuel
                        ship.setPath(fuelPath);
                    }
                    else {
                        ship.setPath(landingPath);
                    }
                }
                else {
                    //If ship does not need to land or refuel it should move randomly and fish
                    ship.randomMove(p_map);
                    ship.fish(p_map);
                }
            }
            */ if (ship.getPath() != undefined) {
                 if (ship.getPath().length > 1) {
                     ship.fish(p_map);
                     ship.followPath();
                 }
                 else {
                     ship.setPath(ai.m_fishingPath.slice());
                 }
             }
        });
    }
    private pathFinding(p_start: Point2, p_goal: Point2): Point2[] {
        return [];
    }
    public findNearestLandingSite(p_start: Point2, p_map: Map): Point2 {
        var startRow: number = p_start.row;
        var startCol: number = p_start.col;
        var delta: number = 0;
        while (delta < Math.max(p_map.getMapHeight(), p_map.getMapWidth())) {
            for (var row = startRow - delta; row <= startRow + delta; row++) {
                for (var col = startCol - delta; col <= startCol + delta; col++) {
                    if (row >= 0 && row < p_map.getMapHeight() && col >= 0 && col < p_map.getMapWidth()) {
                         if (p_map.getGrid()[row][col] instanceof LandingSite) {
                            return new Point2(row, col);
                        }
                    }
                }
            }
            delta++;
        }
    }

    public findNearestFuelSite(p_start: Point2, p_map: Map): Point2 {
        var startRow: number = p_start.row;
        var startCol: number = p_start.col;
        var delta: number = 0;
        while (delta < Math.max(p_map.getMapHeight(), p_map.getMapWidth())) {
            for (var row = startRow - delta; row <= startRow + delta; row++) {
                for (var col = startCol - delta; col <= startCol + delta; col++) {
                    if (row >= 0 && row < p_map.getMapHeight() && col >= 0 && col < p_map.getMapWidth()) {
                        if (p_map.getGrid()[row][col] instanceof FuelSite) {
                            return new Point2(row, col);
                        }
                    }
                }
            }
            delta++;
        }
    }
}
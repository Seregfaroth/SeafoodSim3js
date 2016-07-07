class AI {
    private m_balanceToBuyShip: number;
    private m_balanceToSellShip: number;
    

    public run(p_shipOwner: ShipOwner, p_map: Map): void {
        this.buyOrSellShip(p_shipOwner, p_map);
        this.moveShips(p_shipOwner, p_map);
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

    private moveShips(p_shipOwner: ShipOwner, p_map: Map): void {
        p_shipOwner.getShips().forEach(function (ship) {
            var goal: Point = ship.getPath()[ship.getPath().length - 1];
            if (ship.hasReachedGoal()) {
                //Fish/land/refuel and find new path to new goal
            }
            else if (/*goal is still valid*/true){
                ship.followPath();
            }

        });
    }

    private findGoal(p_ship: Ship, p_map: Map): Point {
        //TODO implement this
        return new Point(0, 0);
    }
}
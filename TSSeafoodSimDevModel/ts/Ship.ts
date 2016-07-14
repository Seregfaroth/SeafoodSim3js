/// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
class Ship {
    private m_fuel: number;
    private m_cargo: Fish[];
    private m_fuelCapacity: number = 10000;
    private m_cargoCapacity: number = 100;
    private m_position: Point2;
    private m_path: Point2[] = [];
    private m_fuelPerMove: number = 1;
    private m_owner: ShipOwner;

    public constructor(p_owner: ShipOwner) {
        this.m_position = p_owner.getShipStartPosition();
        this.m_cargo = [];
        this.m_fuel = this.m_fuelCapacity;
        this.m_owner = p_owner;
    }

    public getFuel(): number {
        return this.m_fuel;
    }

    public getCargo(): Fish[] {
        return this.m_cargo;
    }

    public getFuelCapacity(): number {
        return this.m_fuelCapacity;
    }

    public getCargoCapacity(): number {
        return this.m_cargoCapacity;
    }

    public getPath(): Point2[] {
        return this.m_path;
    }

    public setPath(p_path: Point2[]) {
        this.m_path = p_path;
    }

    public getPosition(): Point2 {
        return this.m_position;
    }
    public getFuelPerMove(): number {
        return this.m_fuelPerMove;
    }
    public getOwner(): ShipOwner {
        return this.m_owner;
    }
    public getCargoSize(): number {
        return this.m_cargo.length;
    }
    //Throws an exception if path is empty, moves to last point in array otherwise
    public followPath(): void {
        if (this.m_path.length < 2) {
            throw new Error("Path is empty");
        }
        else {
            this.m_path.shift();
            this.moveTo(this.m_path[0]);
        }
    }
    public hasReachedGoal(): boolean {
        return this.m_path.length === 1 && this.m_path[0] === this.m_position;
    }

    private moveTo(p_position: Point2): void {
        if (this.m_fuel > this.m_fuelPerMove) {
            this.m_position = p_position;
            this.m_fuel -= this.m_fuelPerMove;
        }
    }
    public emptyPath(): void {
        this.m_path = [];
    }
    public fish(p_map: Map): void {
        var fishToAdd: Fish[] = p_map.fish(this.m_position, this.m_cargoCapacity - this.m_cargo.length);
        this.m_cargo = this.m_cargo.concat(fishToAdd);
        //debugger;
    }

    public land(p_landingSite: LandingSite): void {
        this.shuffleFish();//Might not be necessary every time
        this.m_owner.financialTransaction(p_landingSite.receiveFish(this.m_cargo));
    }

    public refuel(p_fuelSite: FuelSite): void {
        var fuelAmount: number = p_fuelSite.provideFuel(this.m_fuelCapacity - this.m_fuel);
        this.m_owner.financialTransaction(-fuelAmount * p_fuelSite.getPrice());
        this.m_fuel += fuelAmount;
    }

    private shuffleFish(): void {
        var i: number;
        var j: number;
        var fishPlaceholder: Fish;
        for (i = this.m_cargo.length; i; i--) {
            j = Math.floor(Math.random() * i);
            fishPlaceholder = this.m_cargo[i - 1];
            this.m_cargo[i - 1] = this.m_cargo[j];
            this.m_cargo[j] = fishPlaceholder;
        }
    }
    public randomMove(p_map: Map): void {
        //console.log("Original position: " + JSON.stringify(this.m_position));

        
        var newPoint: Point2;
        //While loop runs until an ocean tile has been found
        do {
            var direction: number = Math.floor((Math.random() * 4));
            switch (direction) {
                case 0:
                    if (this.m_position.row !== p_map.getGrid().length - 1) {
                        newPoint = new Point2(this.m_position.row + 1, this.m_position.col)
                    }
                    break;
                case 1:
                    if (this.m_position.col !== 0) {
                       newPoint = new Point2(this.m_position.row, this.m_position.col - 1);
                    }
                    break;
                case 2:
                    if (this.m_position.row !== 0) {
                        newPoint = new Point2(this.m_position.row - 1, this.m_position.col);
                    }
                    break;
                case 3:
                    if (this.m_position.col !== p_map.getGrid()[0].length - 1) {
                        newPoint = new Point2(this.m_position.row, this.m_position.col + 1);
                    }
                    break;
                default:
                    break;
            }
        } while (!newPoint || !(p_map.getTile(newPoint) instanceof Ocean));
        this.moveTo(newPoint);
    //console.log("new postion: " + JSON.stringify(this.m_position));
    }


}
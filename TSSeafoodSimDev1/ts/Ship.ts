﻿class Ship {
    private m_fuel: number;
    private m_cargo: Fish[];
    private m_fuelCapacity: number = 100;
    private m_cargoCapacity: number = 100;
    private m_position: Point;
    private m_path: Point[];
    private m_fuelPerMove: number = 1;
    private m_owner: ShipOwner;

    public constructor(p_owner: ShipOwner) {
        this.m_position = new Point(0, 0);
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

    public getPath(): Point[] {
        return this.m_path;
    }

    public setPath(p_path: Point[]) {
        this.m_path = p_path;
    }

    //Throws an exception if path is empty, moves to last point in array otherwise
    public followPath(): void {
        if (this.m_path.length < 2) {
            throw "Path is empty";
        }
        else {
            this.m_path.shift();
            this.moveTo(this.m_path[0]);
        }
    }
    public hasReachedGoal(): boolean {
        return this.m_path.length === 1 && this.m_path[0] === this.m_position;
    }

    private moveTo(p_position: Point): void {
        this.m_position = p_position;
        this.m_fuel -= this.m_fuelPerMove;
    }

    public fish(p_map: Map): void {
        this.m_cargo.concat(p_map.fish(this.m_position, this.m_cargoCapacity - this.m_cargo.length));
    }
    
    public land(p_landingSite: LandingSite): void {
        this.shuffleFish();
        var returnedFromLandingSite: [Fish[], number] = p_landingSite.receiveFish(this.m_cargo);
        this.m_owner.financialTransaction(returnedFromLandingSite[1]);
        this.m_cargo = returnedFromLandingSite[0];
    }
    
    public refuel(p_fuelSite: FuelSite): void {
        var fuelAmount: number = p_fuelSite.provideFuel(this.m_fuelCapacity - this.m_fuel);
        this.m_owner.financialTransaction(-fuelAmount* p_fuelSite.getPrice());
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
}
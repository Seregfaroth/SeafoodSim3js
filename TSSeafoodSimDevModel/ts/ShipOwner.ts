﻿class ShipOwner {
    private m_ships: Ship[] = [];
    private m_balance: number = 0;
    private m_license: boolean = true;
    private m_shipPrice: number = 100; // Should maybe be stored in map?
    private m_shipStartPosition: Point;

    public constructor(p_shipStartPosition: Point) {
        this.m_shipStartPosition = p_shipStartPosition;
    }

    public getShips(): Ship[] {
        return this.m_ships;
    }

    public getBalance(): number {
        return this.m_balance;
    }

    public getShipStartPosition(): Point {
        return this.m_shipStartPosition;
    }
    public hasLicense(): boolean {
        return this.m_license;
    }

    public obtainLisence(): void {
        this.m_license = true;
    }

    public looseLisence(): void {
        this.m_license = false;
    }

    public getShipPrice(): number {
        return this.m_shipPrice;
    }
    public financialTransaction(p_amount: number): void {
        this.m_balance += p_amount;
    }

    public buyShip() : Ship{
        var ship: Ship = new Ship(this);
        this.m_ships.push(ship);
        this.financialTransaction(-this.m_shipPrice);
        return ship;
    }

    public sellShip(ship: Ship): void {
        if (this.m_ships.indexOf(ship) === -1) {
            throw new Error("Ship owner does not own this ship");
        }
        else {
            this.m_ships.splice(this.m_ships.indexOf(ship), 1);
            this.financialTransaction(this.m_shipPrice);
        }
    }
}
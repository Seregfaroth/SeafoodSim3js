﻿/// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
class ShipOwner {
    private m_ships: Ship[] = [];
    private m_balance: number = 1000;
    private m_license: boolean = true;
    private m_shipPrice: number = 100; // Should maybe be stored in map?
    private m_shipStartPosition: Point2;
    private m_id: string;

    public constructor(p_shipStartPosition: Point2, p_id: string, p_balance?:number) {
        this.m_shipStartPosition = p_shipStartPosition;
        this.m_id = p_id;
        if (p_balance) {
            this.m_balance = p_balance;
        }
    }
    public getId(): string {
        return this.m_id;
    }
    public getShips(): Ship[] {
        return this.m_ships;
    }

    public getBalance(): number {
        return this.m_balance;
    }

    public getShipStartPosition(): Point2 {
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
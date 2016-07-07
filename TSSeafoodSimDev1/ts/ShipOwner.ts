class ShipOwner {
    private m_ships: Ship[];
    private m_balance: number;
    private m_license: boolean;
    private m_shipPrice: number = 100;

    public getShips(): Ship[] {
        return this.m_ships;
    }

    public getBalance(): number {
        return this.m_balance;
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
            throw "Ship owner does not own this ship";
        }
        else {
            this.m_ships.splice(this.m_ships.indexOf(ship), 1);
            this.financialTransaction(this.m_shipPrice);
        }
    }
}
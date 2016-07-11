class Government {
    private m_restrictions: Restrictions;
    private m_balance: number;
    private m_taxingRate: number;


    public constructor() {
        this.m_restrictions = new Restrictions();
    }

    public financialTransaction(p_amount: number): void {
        this.m_balance += p_amount;
    }

    public getBalance(): number {
        return this.m_balance;
    }

    public getTaxingRate(): number {
        return this.m_taxingRate;
    }

    public setTaxingRate(rate: number): void {
        this.m_taxingRate = rate;
    }

    public getRestrictions(): Restrictions {
        return this.m_restrictions;
    }
    
}
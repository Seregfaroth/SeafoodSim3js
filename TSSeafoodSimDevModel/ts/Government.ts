class Government {
    private m_restrictions: Restrictions;
    private m_balance: number;
    private m_taxingRate: number;
    private m_environmentalScore: number;
    private m_socialScore: number;

    public constructor() {
        this.m_restrictions = new Restrictions();
        this.m_balance = 0;
        this.m_taxingRate = 0;
        this.m_environmentalScore = 0;
        this.m_socialScore = 0;
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
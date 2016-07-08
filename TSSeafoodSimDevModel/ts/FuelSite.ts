/// <reference path="Site.ts"/>
class FuelSite extends Site {

    public constructor(p_shipCapacity: number, p_resourceCapacity: number, p_processPerDay: number, p_price: number) {
        super(p_shipCapacity, p_resourceCapacity, p_processPerDay, p_price);
        this.m_resourceAtSite = this.m_resourceCapacity;
    }
    //Returns the actual amount of fuel that the site was able to provide 
    public provideFuel(p_desiredAmount: number): number {
        var amountProvided: number = Math.min(p_desiredAmount, this.m_resourceAtSite);
        this.m_resourceAtSite -= amountProvided;
        return amountProvided;
    }

    public restock(): void {
        if (this.m_resourceAtSite !== this.m_resourceCapacity) {
            this.m_resourceAtSite += this.m_processPerDay;
            if (this.m_resourceAtSite > this.m_resourceCapacity) {
                this.m_resourceAtSite = this.m_resourceCapacity;
            }
        }
    }

}
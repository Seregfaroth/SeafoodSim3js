/// <reference path="Site.ts"/>
class LandingSite extends Site {
    private m_prices: { [fishType: number]: number } = {};

    public constructor(p_shipCapacity: number, p_resourceCapacity: number, p_processPerDay: number, p_prices: { [fishType: number]: number }) {
        super(p_shipCapacity, p_resourceCapacity, p_processPerDay);
        this.m_resourceAtSite = 0;
        this.m_prices = p_prices;
    }
    public getPrices(): { [fishType: number]: number } {
        return this.m_prices;
    }

    //Returns a list of fish that were not taken in and a price
    public receiveFish(p_fish: Fish[]): number {
        var price: number = 0;
        while (p_fish.length > 0 && this.m_resourceAtSite < this.m_resourceCapacity ) {
            price += this.m_prices[p_fish.shift().getType()]; //OBS should be affected by age too
            this.m_resourceAtSite++;
        }
        return price
    }

    public processFish(): void {
        if (this.m_resourceAtSite !== 0) {
            this.m_resourceAtSite -= this.m_processPerDay;
            if (this.m_resourceAtSite < 0) {
                this.m_resourceAtSite = 0;
            }
        }
    }
}
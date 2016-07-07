/// <reference path="Site.ts"/>
class LandingSite extends Site {
    private m_prices: { [fishType: number]: number } = {};


    //Returns a list of fish that were not taken in and a price
    public receiveFish(p_fish: Fish[]): [Fish[], number] {
        var price: number = 0;
        for (var i = 0; i < this.m_resourceCapacity - this.m_resourceAtSite; i++) {
            price += this.m_prices[p_fish[i].getType()];
            this.m_resourceAtSite++;
        }
        return [p_fish.slice(i, p_fish.length - 1), price];
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
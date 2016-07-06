class FuelSite extends Site {

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
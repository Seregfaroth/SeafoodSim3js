class Restrictions{
    private m_quotes: { [shipOwner: string]: number } = {};
    private m_effortLimits: { [shipOwner: string]: number } = {};
    private m_restrictedAreas: Tile[] = [];
    private m_landingDistrubutions: { [Site: string]: number } = {};

    public restrictArea(p_tile: Tile) {
        this.m_restrictedAreas.push(p_tile);
    }

    public setQuote(p_shipOwner: string, p_amount: number) {
        this.m_quotes[p_shipOwner] = p_amount;
    }

    public setEffortLimit(p_shipOwner: string, p_amount: number) {
        this.m_effortLimits[p_shipOwner] = p_amount;
    }

    public setLandingDistrubution(p_site: string, p_amount: number) {
        this.m_landingDistrubutions[p_site] = p_amount;
    }
}
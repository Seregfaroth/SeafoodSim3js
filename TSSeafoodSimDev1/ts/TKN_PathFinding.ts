
class TKN_PathFinding {
    private m_finder;
    private m_navGrid;
    constructor(p_navMatrix) {
        this.m_finder = new PF.AStarFinder();
        this.m_navGrid = new PF.Grid(p_navMatrix);
    }
    public findPath(p_xStart, p_yStart, p_xEnd, p_yEnd) : number[] {
        return this.m_finder.findPath(p_xStart, p_yStart, p_xEnd, p_yEnd, this.m_navGrid);
    }
}
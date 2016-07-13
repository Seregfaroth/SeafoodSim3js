

class TKN_PathFinding {
    private m_finder;
    private m_navGrid;

    constructor() {
        this.m_finder = new PF.AStarFinder();
        //this.m_navGrid = PF.Grid(navTable);
    }
    findPath(xOrigin, yOrigin, xDest, yDest): number[][] {
        var ret: number[][];
        var backup = this.m_navGrid.clone();
        ret = this.m_finder.findPath(xOrigin, yOrigin, xDest, yDest, this.m_navGrid);
        this.m_navGrid = backup;
        return ret;        
    }
    set navTable(p_nav: number[][]) {
        this.m_navGrid = new PF.Grid(p_nav);
    }
}
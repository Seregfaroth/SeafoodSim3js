
class TKN_PathFinding {
    private m_finder;
    private m_navGrid;
    constructor(p_navMatrix) {
        //this.m_finder = new PF.AStarFinder();
        //this.m_navGrid = new PF.Grid(p_navMatrix);
    }
    //input: start and end points 
    //output: the best path from start to end, with A*
    public findPath(p_xStart, p_yStart, p_xEnd, p_yEnd): number[] {
        if (p_xStart < 0) p_xStart = 0;//
        if (p_yStart < 0) p_yStart = 0;
        var ret;
        //if (p_xEnd > this.m_navGrid.width) p_xEnd = this.m_navGrid.width - 1;
        //if (p_yEnd > this.m_navGrid.height) p_yEnd = this.m_navGrid.height - 1;
        ////if (p_xEnd > this.m_navGrid.height) p_xEnd = this.m_navGrid.height - 1;
        ////if (p_yEnd > this.m_navGrid.width) p_yEnd = this.m_navGrid.width - 1;
        //var navBackup = this.m_navGrid.clone();
        //ret = this.m_finder.findPath(p_xStart, p_yStart, p_xEnd, p_yEnd, this.m_navGrid);
        //this.m_navGrid = navBackup;//
        return ret;//
    }
}
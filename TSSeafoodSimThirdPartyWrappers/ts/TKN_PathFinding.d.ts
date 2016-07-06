declare class TKN_PathFinding {
    private m_finder;
    private m_navGrid;
    constructor(p_navMatrix: any);
    findPath(p_xStart: any, p_yStart: any, p_xEnd: any, p_yEnd: any): number[];
}

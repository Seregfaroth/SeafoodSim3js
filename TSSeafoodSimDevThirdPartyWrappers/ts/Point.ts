class Point2 {
    public row: number;
    public col: number;

    public constructor(p_row: number, p_col: number) {
        this.row = p_row;
        this.col = p_col;
    }
    compare(p_com: Point2): boolean {
        return this.row === p_com.row && this.col === p_com.col;
    }    
}

class Point3 {
    public row: number;
    public col: number;
    public depth: number;

    public constructor(p_row: number, p_col: number, p_depth: number) {
        this.row = p_row;
        this.col = p_col;
        this.depth = p_depth;
    }
    compare(p_com: Point3): boolean {
        return this.row === p_com.row && this.col === p_com.col && this.depth === p_com.depth;
    }
}
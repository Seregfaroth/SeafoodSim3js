/// <reference path="Tile.ts"/>
class Ocean extends Tile {
    private m_fishCapacity: number;
    private m_shipCapacity: number;

    public constructor(p_fishCapacity: number, p_shipCapacity: number) {
        super();
        this.m_fishCapacity = p_fishCapacity;
        this.m_shipCapacity = p_shipCapacity;
    }
}
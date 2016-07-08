﻿/// <reference path="Tile.ts"/>
class Site extends Tile {
    protected m_shipCapacity: number;
    protected m_resourceCapacity: number;
    protected m_resourceAtSite: number;
    protected m_processPerDay: number;

    public constructor(p_shipCapacity: number, p_resourceCapacity: number, p_processPerDay: number) {
        super();
        this.m_shipCapacity = p_shipCapacity;
        this.m_resourceCapacity = p_resourceCapacity;
        this.m_processPerDay = p_processPerDay;
    }

    public getShipCapacity(): number {
        return this.m_shipCapacity;
    }

    public getResourceCapacity(): number {
        return this.m_resourceCapacity;
    }

    public getResourceAtSite(): number {
        return this.m_resourceAtSite;
    }

    public getProcessPerDay(): number {
        return this.m_processPerDay;
    }
    
}
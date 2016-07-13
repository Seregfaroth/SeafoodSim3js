/// <reference path="wrappers.d.ts" />
declare class AI {
    private m_balanceToBuyShip;
    private m_balanceToSellShip;
    private m_fishingPath;
    run(p_shipOwner: ShipOwner, p_map: Map): void;
    private buyOrSellShip(p_shipOwner, p_map);
    private runShips(p_shipOwner, p_map);
    private pathFinding(p_start, p_goal);
    findNearestLandingSite(p_start: Point2, p_map: Map): Point2;
    findNearestFuelSite(p_start: Point2, p_map: Map): Point2;
}
declare class Fish {
    private m_age;
    private m_maximumAge;
    private m_type;
    constructor(p_type: number, p_age?: number);
    getType(): number;
    getAge(): number;
    age(): void;
}
declare abstract class School {
    protected m_position: Point2;
    protected m_fish: Fish[];
    protected m_maxAge: number;
    protected m_typeNumber: number;
    constructor(p_size: number, p_position: Point2);
    getSize(): number;
    getPosition(): Point2;
    getFish(): Fish[];
    shuffleFish(): void;
    live(p_map: Map): void;
    private age();
    getMaxAge(): number;
    protected abstract recruit(p_map: Map): void;
    protected abstract move(p_map: Map): void;
}
declare class Cod extends School {
    constructor(p_size: number, p_position: Point2);
    protected move(p_map: Map): void;
    protected recruit(p_map: Map): void;
}
declare class Tile {
}
declare class Site extends Tile {
    protected m_shipCapacity: number;
    protected m_resourceCapacity: number;
    protected m_resourceAtSite: number;
    protected m_processPerDay: number;
    constructor(p_shipCapacity: number, p_resourceCapacity: number, p_processPerDay: number);
    getShipCapacity(): number;
    getResourceCapacity(): number;
    getResourceAtSite(): number;
    getProcessPerDay(): number;
}
declare class FuelSite extends Site {
    private m_price;
    constructor(p_shipCapacity: number, p_resourceCapacity: number, p_processPerDay: number, p_price: number);
    getPrice(): number;
    provideFuel(p_desiredAmount: number): number;
    restock(): void;
}
declare class Government {
    private m_restrictions;
    private m_balance;
    private m_taxingRate;
    constructor();
    financialTransaction(p_amount: number): void;
    getBalance(): number;
    getTaxingRate(): number;
    setTaxingRate(rate: number): void;
    getRestrictions(): Restrictions;
}
declare class Land extends Tile {
}
declare class LandingSite extends Site {
    private m_prices;
    private m_untaxedValue;
    constructor(p_shipCapacity: number, p_resourceCapacity: number, p_processPerDay: number, p_prices: {
        [fishType: number]: number;
    });
    getPrices(): {
        [fishType: number]: number;
    };
    tax(p_taxingRate: number): number;
    receiveFish(p_fish: Fish[]): number;
    processFish(): void;
}
declare class Mackerel extends School {
    constructor(p_size: number, p_position: Point2);
    protected move(): void;
    protected recruit(): void;
}
declare class Map {
    private m_grid;
    m_schools: School[];
    private m_restrictions;
    private m_fishingPercentage;
    private m_ships;
    constructor(p_size: number, p_noOfSchools: number, p_restrictions: Restrictions);
    getRestrictions(): Restrictions;
    getGrid(): Tile[][];
    getShips(): Ship[];
    private placeSchools(p_n);
    addSchool(p_school: School): void;
    private generateMap(p_size);
    addShip(ship: Ship): void;
    removeShip(ship: Ship): void;
    getNoOfShips(): number;
    getFishingPercentage(): number;
    fish(p_position: Point2, p_capacity: number): Fish[];
    private getSchoolsInTile(p_position);
    getNoOfFishInTile(p_position: Point2): number;
    getTile(p_position: Point2): Tile;
    getPathFindingMap(): number[][];
    getMapWidth(): number;
    getMapHeight(): number;
    run(): void;
    getLandingSites(): LandingSite[];
    emptyGrid(): void;
}
declare class ShipOwner {
    private m_ships;
    private m_balance;
    private m_license;
    private m_shipPrice;
    private m_shipStartPosition;
    private m_id;
    constructor(p_shipStartPosition: Point2, p_id: string, p_balance?: number);
    getId(): string;
    getShips(): Ship[];
    getBalance(): number;
    getShipStartPosition(): Point2;
    hasLicense(): boolean;
    obtainLisence(): void;
    looseLisence(): void;
    getShipPrice(): number;
    financialTransaction(p_amount: number): void;
    buyShip(): Ship;
    sellShip(ship: Ship): void;
}
declare class Model {
    private m_map;
    private m_shipOwners;
    private m_goverment;
    private m_ai;
    constructor();
    run(): void;
    getShipOwners(): ShipOwner[];
    getMap(): Map;
    getGovernment(): Government;
    createShipOwner(p_startingPoint: Point2, p_balance?: number): void;
    updateScore(): void;
}
declare class Ocean extends Tile {
    private m_fishCapacity;
    private m_shipCapacity;
    constructor(p_fishCapacity: number, p_shipCapacity: number);
    getFishCapacity(): number;
}
declare class Restrictions {
    private m_quotes;
    private m_effortLimits;
    private m_restrictedAreas;
    private m_landingDistrubutions;
    private m_maxShips;
    restrictArea(p_tile: Tile): void;
    unRestrictArea(p_tile: Tile): void;
    setQuote(p_shipOwner: string, p_amount: number): void;
    setEffortLimit(p_shipOwner: string, p_amount: number): void;
    setLandingDistrubution(p_site: string, p_amount: number): void;
    getQuotes(): {
        [shipOwner: string]: number;
    };
    getEffortLimits(): {
        [shipOwner: string]: number;
    };
    getRestrictedAreas(): Tile[];
    getLandingDistrubutions(): {
        [Site: string]: number;
    };
    setMaxShips(p_n: number): void;
    getMaxShips(): number;
    isRestricted(p_tile: Tile): boolean;
}
declare class Ship {
    private m_fuel;
    private m_cargo;
    private m_fuelCapacity;
    private m_cargoCapacity;
    private m_position;
    private m_path;
    private m_fuelPerMove;
    private m_owner;
    constructor(p_owner: ShipOwner);
    getFuel(): number;
    getCargo(): Fish[];
    getFuelCapacity(): number;
    getCargoCapacity(): number;
    getPath(): Point2[];
    setPath(p_path: Point2[]): void;
    getPosition(): Point2;
    getFuelPerMove(): number;
    getOwner(): ShipOwner;
    getCargoSize(): number;
    followPath(): void;
    hasReachedGoal(): boolean;
    private moveTo(p_position);
    emptyPath(): void;
    fish(p_map: Map): void;
    land(p_landingSite: LandingSite): void;
    refuel(p_fuelSite: FuelSite): void;
    private shuffleFish();
    randomMove(p_map: Map): void;
}

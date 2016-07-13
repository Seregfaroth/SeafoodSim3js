/// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
class Map {
    private m_grid: Tile[][] = [];
    public m_schools: School[] = [];
    private m_restrictions: Restrictions;
    private m_fishingPercentage: number = 0.01;
    private m_ships: Ship[] = [];
    private m_fuelRunningCost: number = 2;
    private m_landingRunningCost: number = 1;

    public constructor(p_size: number, p_noOfSchools: number, p_restrictions: Restrictions) {
        this.m_restrictions = p_restrictions;
        ///OBS size and no of schools is not being used at the moment
        this.generateMap(p_size);
        this.placeSchools(p_noOfSchools);
    }

    public getRestrictions(): Restrictions {
        return this.m_restrictions;
    }

    public getGrid(): Tile[][] {
        return this.m_grid;
    }
    public getShips(): Ship[] {
        return this.m_ships;
    }
    public getSchools(): School[] {
        return this.m_schools;
    }
    private placeSchools(p_n) {
        var schoolsPlaced: number = 0;
        while (schoolsPlaced < p_n) {
            var point: Point2 = new Point2(Math.floor(Math.random() * this.getMapHeight()), Math.floor(Math.random() * this.getMapWidth()));
            var tile: Tile = this.getTile(point);
            if (tile instanceof Ocean && this.getNoOfFishInTile(point) < (<Ocean>tile).getFishCapacity()) {
                this.addSchool(new Cod(10, point));
                schoolsPlaced++;
            }

        }
    }
    public addSchool(p_school: School): void {
        this.m_schools.push(p_school);
    }
    private generateMap(p_size: number) {

        for (var i = 0; i < p_size; i++) {
            var row: Tile[] = [];
            for (var j = 0; j < p_size; j++) {
                row.push(new Ocean(100, 2));
            }
            this.m_grid.push(row);
        }
            for (var c = 0; c < p_size / 2; c++) {
                for (var r = 0; r < p_size / (4*(c+1)); r++) {
                    this.m_grid[r][c] = new Land();
                }
        }
        this.m_grid[Math.floor(p_size / 2)][Math.floor(p_size / 2)] = new Land();
        
        for (var r = p_size - Math.floor(p_size / 5); r < p_size; r++) {
                for (var c = Math.floor(p_size / 2 + p_size / 5); c < r; c++) {
                    this.m_grid[r][c] = new Land();
                }
            }
        

        var prices: { [fishType: number]: number } = {}
        prices[0] = 10;
        prices[1] = 5;

        this.m_grid[Math.floor(p_size / 2)][Math.floor(p_size / 2)+1] = new LandingSite(1, 5, 20,prices,this.m_landingRunningCost);
        this.m_grid[Math.floor(p_size / 2)][Math.floor(p_size / 2)-1] = new FuelSite(1, 300, 20, 10,this.m_fuelRunningCost);

    }

    public addShip(ship: Ship) {
        this.m_ships.push(ship);
    }

    public removeShip(ship: Ship): void {
        this.m_ships.splice(this.m_ships.indexOf(ship), 1);
    }

    public getNoOfShips(): number {
        return this.m_ships.length;
    }
    public getFishingPercentage(): number {
        return this.m_fishingPercentage;
    }

    public fish(p_position: Point2, p_capacity: number): Fish[] {
        var percentage: number = this.m_fishingPercentage;
        var noOfFishInTile: number = this.getNoOfFishInTile(p_position);
        var fish: Fish[] = [];
        if (p_capacity < noOfFishInTile * percentage) {
            //If the ship is not able to fish the full percentage
            percentage = p_capacity / noOfFishInTile;
        }
        this.getSchoolsInTile(p_position).forEach(function (s) {
            s.shuffleFish(); //May not be necessary to shuffle every time
            var fishInSchool: Fish[] = s.getFish();
            //Take a percentage of fish out of the school and add it to the fish list
            var fishToAdd: Fish[] = fishInSchool.splice(0, fishInSchool.length * percentage);
             fish = fish.concat(fishToAdd);
        });
        return fish;
    }
    private getSchoolsInTile(p_position: Point2): School[] {
        var list: School[] = [];
        this.m_schools.forEach(function (s) {
            if (s.getPosition() === p_position) {
                list.push(s);

            }
        });
        return list;
    }
    public getNoOfFishInTile(p_position: Point2): number {
        var num: number = 0;
        this.getSchoolsInTile(p_position).forEach(function (s) {
           num += s.getSize();
        });
        return num;
    }

    public getTile(p_position: Point2): Tile {
        return this.m_grid[p_position.row][p_position.col];
    }

    public getPathFindingMap(): number[][] {
        var map: number[][] = [];
        for (var row = 0; row < this.m_grid.length; row++) {
            var newRow: number[] = [];
            for (var col = 0; col < this.m_grid[0].length; col++) {
                if (this.m_grid[row][col] instanceof Land) {
                    newRow.push(1);
                } else {
                    newRow.push(0);
                }
            }
            map.push(newRow);
        }
        return map;
    }

    public getMapWidth(): number {
        return this.m_grid[0].length;
    }
    public getMapHeight(): number {
        return this.m_grid.length;
    }

    public run(): void {
        var map: Map = this;
        this.m_schools.forEach(function (s) {
            s.live(map);
        });
    }

    public getLandingSites(): LandingSite[] {
        var sites: LandingSite[] = [];
        for (var row = 0; row < this.getMapHeight(); row++) {
            for (var col = 0; col < this.getMapWidth(); col++) {
                if (this.m_grid[row][col] instanceof LandingSite) {
                    sites.push(<LandingSite>this.m_grid[row][col]);
                }
            }
        }
        return sites;
    }

    public getFuelSites(): FuelSite[] {
        var sites: FuelSite[] = [];
        for (var row = 0; row < this.getMapHeight(); row++) {
            for (var col = 0; col < this.getMapWidth(); col++) {
                if (this.m_grid[row][col] instanceof FuelSite) {
                    sites.push(<FuelSite>this.m_grid[row][col]);
                }
            }
        }
        return sites;
    }

    public emptyGrid(): void {
        for (var r = 0; r < this.getMapHeight(); r++) {
            for (var c = 0; c < this.getMapWidth(); c++) {
                this.m_grid[r][c] = new Ocean(100,1);
            }
        }
    }
}
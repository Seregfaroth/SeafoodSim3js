/// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
class Map {
    private m_grid: Tile[][] = [];
    private m_schools: School[] = [];
    private m_restrictions: Restrictions;
    private m_fishingPercentage: number = 0.01;
    private m_ships: Ship[] = [];

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
    private placeSchools(p_n) {
        this.addSchool(new Cod(100, new Point(1, 1)));
        this.addSchool(new Cod(100, new Point(4, 4)));
    }
    public addSchool(p_school: School): void {
        this.m_schools.push(p_school);
    }
    private generateMap(p_size: number) {

        for (var i = 0; i < 5; i++) {
            var row: Tile[] = [];
            for (var j = 0; j < p_size; j++) {
                row.push(new Ocean(1000, 2));
            }
            this.m_grid.push(row);
        }

        for (var col = 0; col < 4; col++) {
            this.m_grid[0][col] = new Land();
        }
        this.m_grid[2][2] = new Land();
        
        var prices: { [fishType: number]: number } = {}
        prices[0] = 10;
        prices[1] = 5;

        this.m_grid[2][3] = new LandingSite(1, 5, 20,prices );
        this.m_grid[2][1] = new FuelSite(1, 300, 20, 10);

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

    public fish(p_position: Point, p_capacity: number): Fish[] {
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
    private getSchoolsInTile(p_position: Point): School[] {
        var list: School[] = [];
        this.m_schools.forEach(function (s) {
            if (s.getPosition() === p_position) {
                list.push(s);

            }
        });
        return list;
    }
    public getNoOfFishInTile(p_position: Point): number {
        var num: number = 0;
        this.getSchoolsInTile(p_position).forEach(function (s) {
           num += s.getSize();
        });
        return num;
    }

    public getTile(p_position: Point): Tile {
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
}
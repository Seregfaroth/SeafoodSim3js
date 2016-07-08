/// <reference path="School.ts"/>

class Cod extends School{
    public constructor(p_size: number, p_position: Point) {
        super(p_size, p_position);
        this.m_maxAge = 10;
        this.m_typeNumber = 0;
        for (var i = 0; i < p_size; i++) {
            this.m_fish.push(new Fish(this.m_typeNumber, Math.floor(Math.random() * this.m_maxAge)));
        }
    }
   
    //Move with a probability of 25% with a random direction
    ///OBS need to check if index is inside map
    protected move(p_map: Map): void {
        var move: boolean = Math.random() < 0.25;
        
        if (move) {
            var direction: number = Math.floor((Math.random() * 4));
            var newPoint: Point;
            //While loop runs until an ocean tile has been found
            do {
                switch (direction) {
                    case 0:
                        if (this.m_position.row === p_map.getGrid().length - 1) {
                            newPoint = new Point(0, this.m_position.col);
                        }
                        else {
                            newPoint = new Point(this.m_position.row + 1, this.m_position.col)
                        }
                        break;
                    case 1:
                        if (this.m_position.col === 0) {
                            newPoint = new Point(this.m_position.row, p_map.getGrid()[0].length - 1)
                        }
                        else {
                            newPoint = new Point(this.m_position.row, this.m_position.col - 1);
                        }
                        break;
                    case 2:
                        if (this.m_position.row === 0) {
                            newPoint = new Point(p_map.getGrid().length - 1, this.m_position.col);
                        }
                        else {
                            newPoint = new Point(this.m_position.row - 1, this.m_position.col);
                        }
                        break;
                    case 3:
                        if (this.m_position.col === p_map.getGrid()[0].length - 1) {
                            newPoint = new Point(this.m_position.row, 0);
                        }
                        else {
                            newPoint = new Point(this.m_position.row, this.m_position.col + 1);
                        }
                        break;
                    default:
                        break;
                }
                direction = Math.floor((Math.random() * 4));
            } while (!(p_map.getTile(newPoint) instanceof Ocean));
            this.m_position = newPoint;
        }
    }

    protected recruit(): void {
        var noOfNewFish: number = Math.random() * this.m_fish.length;
        for (var i = 0; i < noOfNewFish; i++) {
            this.m_fish.push(new Fish(this.m_typeNumber));
        }
    }

}
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
    protected move(p_map: Map): void {
        var move: boolean = Math.random() < 0.25;
        if (move) {
            var direction: number = Math.floor((Math.random() * 5));
            switch (direction) {
                case 0:
                    if (p_map.getTile(new Point(this.m_position.row + 1, this.m_position.col)) instanceof Ocean) {
                        this.m_position.row++;
                    }
                    break;
                case 1:
                    if (p_map.getTile(new Point(this.m_position.row, this.m_position.col-1)) instanceof Ocean) {
                        this.m_position.col--;
                    }
                    break;
                case 2:
                    if (p_map.getTile(new Point(this.m_position.row - 1, this.m_position.col)) instanceof Ocean) {
                        this.m_position.row--;
                    }
                    break;
                case 3:
                    if (p_map.getTile(new Point(this.m_position.row, this.m_position.col + 1)) instanceof Ocean) {
                        this.m_position.col++;
                    }
                    break;
                default:
                    break;
            }
        }
    }

    protected recruit(): void {
        var noOfNewFish: number = Math.random() * this.m_fish.length;
        for (var i = 0; i < noOfNewFish; i++) {
            this.m_fish.push(new Fish(this.m_typeNumber));
        }
    }

}
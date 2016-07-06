class School {
    private m_position: Point;
    private m_fish: Fish[];


    public constructor(p_size: number, p_position: Point, p_type: number) {
        this.m_position = p_position;
        for (var i = 0; i < p_size; i++) {
            if (p_type === 0) {//Cod
                this.m_fish.push(new Cod(10));
            }
            else if (p_type === 1) {//Mackerel
                this.m_fish.push(new Mackerel(15));
            }
        }
    }

    public getSize(): number {
        return this.m_fish.length;
    }

    public getPosition(): Point {
        return this.m_position;
    }

    public getFish(): Fish[] {
        return this.m_fish;
    }

    public shuffleFish(): void {
        var i: number;
        var j: number;
        var fishPlaceholder: Fish;
        for (i = this.m_fish.length; i; i--) {
            j = Math.floor(Math.random() * i);
            fishPlaceholder = this.m_fish[i - 1];
            this.m_fish[i - 1] = this.m_fish[j];
            this.m_fish[j] = fishPlaceholder;
        }
    }
}
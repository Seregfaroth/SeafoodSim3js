class Fish {
    private m_age: number;
    private m_maximumAge: number;
    protected m_type: number;

    public constructor(p_maximumAge: number, p_age?: number) {
        this.m_age = 0;
        this.m_maximumAge = p_maximumAge;
        if (p_age != undefined) {
            this.m_age = p_age;
        }
    }

    public getType(): number {
        return this.m_type;
    }
    
}
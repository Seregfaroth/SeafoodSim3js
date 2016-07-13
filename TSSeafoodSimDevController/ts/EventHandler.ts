class EventHandler {
    private m_controller: Controller;
    public constructor(p_controller: Controller) {
        this.m_controller = p_controller;
        this.bindFunctions();
    }
    public bindFunctions(): void {
        var handler: EventHandler = this;
        this.setTax = this.setTax.bind(this);
        $("#taxSlider").on("slidechange", function (event, ui) { handler.setTax(ui.value); });
        this.start = this.start.bind(this);
        $("#startButton").on("click", this.start);
        this.pause = this.pause.bind(this);
        $("#pauseButton").on("click", this.pause);

        this.fastForward = this.fastForward.bind(this);
        $("#fastForwardButton").on("click", this.fastForward);
        

        this.setQuote = this.setQuote.bind(this);
        this.m_controller.getModel().getShipOwners().forEach(function (so) {
            $("#quoteSlider" + so.getId()).on("slidechange", function (event, ui) {
                handler.setQuote(so.getId(), ui.value);
            });
        });

        this.setEffortLimit = this.setEffortLimit.bind(this);
        this.m_controller.getModel().getShipOwners().forEach(function (so) {
            $("#effortSlider" + so.getId()).on("slidechange", function (event, ui) {
                handler.setEffortLimit(so.getId(), ui.value);
            });
        });
        
    }

    public setTax(p_n: number): void {
        this.m_controller.getModel().getGovernment().setTaxingRate(p_n);
    }

    public setQuote(owner: string, p_n: number): void {
        this.m_controller.getModel().getGovernment().getRestrictions().setQuote(owner, p_n);
    }

    public setEffortLimit(owner: string, p_n: number): void {
        this.m_controller.getModel().getGovernment().getRestrictions().setEffortLimit(owner, p_n);
    }

    public setLandingDistrubution(site: string, p_n: number): void {
        this.m_controller.getModel().getGovernment().getRestrictions().setLandingDistrubution(site, p_n);
    }

    public start(): void {
        this.m_controller.runSimulation(1);
    }

    public pause(): void {
        this.m_controller.pause();
    }

    public fastForward(): void {
        this.m_controller.fastForward();
    }
    public restrictArea(p_tile: Tile) {
        if (this.m_controller.getModel().getGovernment().getRestrictions().isRestricted(p_tile)) {
            this.m_controller.getModel().getGovernment().getRestrictions().unRestrictArea(p_tile);
        }
        else {
            this.m_controller.getModel().getGovernment().getRestrictions().restrictArea(p_tile);
        }
    }
}
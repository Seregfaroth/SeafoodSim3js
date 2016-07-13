class MapMenu {

    constructor(p_ShipOwners: ShipOwner[], p_LandingSites: LandingSite[]) {
        console.log("construct MapMenu");
        var menuDiv: HTMLElement = document.createElement("div");
        menuDiv.id = "menuDiv";
        menuDiv.style.cssFloat = "left";
        menuDiv.style.width = "20%";
        menuDiv.style.height = "70%";
        menuDiv.className = "ui-widget-content";
        document.getElementById("mainDiv").appendChild(menuDiv);

        //Create score view
        var scoreLegend: HTMLLegendElement = document.createElement("legend");
        scoreLegend.classList.add("menu-legend");
        var scoreTable: HTMLTableElement = document.createElement("table");
        scoreLegend.appendChild(scoreTable);
        var financialRow: HTMLTableRowElement = scoreTable.insertRow();
        var finacialScoreLabel: HTMLDivElement = document.createElement("div");
        finacialScoreLabel.innerHTML = "Financial Score:";
        financialRow.appendChild(finacialScoreLabel);


        //Create tax slider
        var taxDiv: HTMLElement = document.createElement("legend");
        taxDiv.classList.add("menu-legend");
        menuDiv.appendChild(taxDiv);

        var taxLabel: HTMLElement = document.createElement("div");
        taxLabel.innerHTML = "Taxing rate:";
        taxLabel.className = "legend-header";
        taxLabel.style.cssFloat = "left";
        taxDiv.appendChild(taxLabel);
        

        var taxSlider: HTMLElement = document.createElement("div");
        taxSlider.id = "taxSlider";
        taxSlider.style.width = "70%";
        taxSlider.style.cssFloat = "right";
        taxSlider.style.margin = "10px";
        taxDiv.appendChild(taxSlider);
        $("#taxSlider").slider();
        $("#taxSlider").slider("option", "min", 0);
        $("#taxSlider").slider("option", "max", 100);


        //Create quote sliders
        var quoteLegend: HTMLElement = document.createElement("legend");
        quoteLegend.classList.add("menu-legend");
        var quoteLabel: HTMLElement = document.createElement("div");
        quoteLabel.innerHTML = "Quotas:";

        quoteLabel.className = "legend-header";
        quoteLegend.appendChild(quoteLabel);
        menuDiv.appendChild(quoteLegend);
        var quoteTable: any = document.createElement("TABLE");
        quoteLegend.appendChild(quoteTable);

        for (var i = 0; i < p_ShipOwners.length; i++) {
            var row: HTMLTableRowElement = quoteTable.insertRow();
            var cell: HTMLTableCellElement = row.insertCell();
            var quoteLabel: HTMLElement = document.createElement("div");
            quoteLabel.innerHTML = p_ShipOwners[i].getId();
            quoteLabel.style.cssFloat = "left";
            cell.appendChild(quoteLabel);

            cell = row.insertCell();
            cell.className = "slider-cell";
            var quoteSlider: HTMLElement = document.createElement("div");
            quoteSlider.id = "quoteSlider" + p_ShipOwners[i].getId();;
            quoteSlider.style.width = "70%";
            quoteSlider.style.cssFloat = "right";
            quoteSlider.style.margin = "10px";
            cell.appendChild(quoteSlider);
            $("#quoteSlider" + p_ShipOwners[i].getId()).slider();
            $("#quoteSlider" + p_ShipOwners[i].getId()).slider("option", "min", 0);
            $("#quoteSlider" + p_ShipOwners[i].getId()).slider("option", "max", 100);
        }

        //Create effort limit sliders
        var effortLegend: HTMLElement = document.createElement("legend");
        effortLegend.classList.add("menu-legend");
        var effortLabel: HTMLElement = document.createElement("div");
        effortLabel.innerHTML = "Effort Limits:";
        effortLabel.className = "legend-header";
        effortLegend.appendChild(effortLabel);
        menuDiv.appendChild(effortLegend);
        var effortTable: any = document.createElement("TABLE");
        effortLegend.appendChild(effortTable);

        for (var i = 0; i < p_ShipOwners.length; i++) {
            var row: HTMLTableRowElement = effortTable.insertRow();
            var cell: HTMLTableCellElement = row.insertCell();
            var effortLabel: HTMLElement = document.createElement("div");
            effortLabel.innerHTML = p_ShipOwners[i].getId();
            effortLabel.style.cssFloat = "left";
            cell.appendChild(effortLabel);

            cell = row.insertCell();
            cell.className = "slider-cell";
            var effortSlider: HTMLElement = document.createElement("div");
            effortSlider.id = "effortSlider" + p_ShipOwners[i].getId();
            effortSlider.style.width = "70%";
            effortSlider.style.cssFloat = "right";
            effortSlider.style.margin = "10px";
            cell.appendChild(effortSlider);
            $("#effortSlider" + p_ShipOwners[i].getId()).slider();
            $("#effortSlider" + p_ShipOwners[i].getId()).slider("option", "min", 0);
            $("#effortSlider" + p_ShipOwners[i].getId()).slider("option", "max", 100);
        }
        //Create buttons
        var buttonsDiv: HTMLElement = document.createElement("legend");
        buttonsDiv.classList.add("menu-legend");
        var labelDiv: HTMLElement = document.createElement("div");
        labelDiv.className = "legend-header";
        labelDiv.innerHTML = "Simulation control:";
        buttonsDiv.appendChild(labelDiv);
        menuDiv.appendChild(buttonsDiv);

        var startButton: HTMLDivElement = document.createElement("div");
        startButton.id = "startButton";
        startButton.style.margin = "10px";
        startButton.classList.add("ui-button");
        startButton.classList.add("fa");
        startButton.classList.add("fa-play");
        buttonsDiv.appendChild(startButton);

        var pauseButton: HTMLDivElement = document.createElement("div");
        pauseButton.id = "pauseButton";
        pauseButton.style.margin = "10px";
        pauseButton.classList.add("fa");
        pauseButton.classList.add("fa-pause");
        pauseButton.classList.add("ui-button");
        buttonsDiv.appendChild(pauseButton);

        var fastForwardButton: HTMLDivElement = document.createElement("div");
        fastForwardButton.id = "fastForwardButton";
        fastForwardButton.style.margin = "10px";
        fastForwardButton.classList.add("fa");
        fastForwardButton.classList.add("fa-fast-forward");
        fastForwardButton.classList.add("ui-button");
        buttonsDiv.appendChild(fastForwardButton);
    }
}
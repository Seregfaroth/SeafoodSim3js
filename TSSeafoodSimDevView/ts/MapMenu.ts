class MapMenu {

    constructor(p_ShipOwners: ShipOwner[], p_LandingSites: LandingSite[]) {
        console.log("construct MapMenu");
        var menuDiv: HTMLElement = document.createElement("div");
        menuDiv.id = "menuDiv";
        menuDiv.style.cssFloat = "left";
        menuDiv.style.width = "20%";
        menuDiv.style.height = "70%";
        menuDiv.classList.add("ui-widget-content");
        document.getElementById("mainDiv").appendChild(menuDiv);

        //Create score view
        var scoreLegend: HTMLLegendElement = document.createElement("legend");
        var scoreLabel: HTMLDivElement = document.createElement("div");
        scoreLabel.classList.add("legend-header");
        scoreLabel.innerHTML = "Score:";
        scoreLegend.appendChild(scoreLabel);
        menuDiv.appendChild(scoreLegend);
        scoreLegend.classList.add("menu-legend");
        var scoreTable: HTMLTableElement = document.createElement("table");
        scoreTable.classList.add("menu-text");
        scoreLegend.appendChild(scoreTable);

        var financialRow: HTMLTableRowElement = scoreTable.insertRow();
        var labelCell: HTMLTableCellElement = financialRow.insertCell();
        var finacialScoreLabel: HTMLDivElement = document.createElement("div");
        finacialScoreLabel.innerHTML = "Financial Score:";
        
        labelCell.appendChild(finacialScoreLabel);
        var scoreCell: HTMLTableCellElement = financialRow.insertCell();
        var score: HTMLDivElement = document.createElement("div");
        score.id = "financialScore";
        score.innerHTML = "0";
        score.classList.add("score");
        scoreCell.appendChild(score);

        var envRow: HTMLTableRowElement = scoreTable.insertRow();
        var labelCell: HTMLTableCellElement = envRow.insertCell();
        var ecoScoreLabel: HTMLDivElement = document.createElement("div");
        ecoScoreLabel.innerHTML = "Environmental Score:";
        labelCell.appendChild(ecoScoreLabel);
        var scoreCell: HTMLTableCellElement = envRow.insertCell();
        var score: HTMLDivElement = document.createElement("div");
        score.id = "environmentalScore";
        score.innerHTML = "0";
        score.classList.add("score");
        scoreCell.appendChild(score);

        var socialRow: HTMLTableRowElement = scoreTable.insertRow();
        var labelCell: HTMLTableCellElement = socialRow.insertCell();
        var socialScoreLabel: HTMLDivElement = document.createElement("div");
        socialScoreLabel.innerHTML = "Social Score:";
        labelCell.appendChild(socialScoreLabel);
        var scoreCell: HTMLTableCellElement = socialRow.insertCell();
        var score: HTMLDivElement = document.createElement("div");
        score.innerHTML = "0";
        score.id = "socialScore";
        score.classList.add("score");
        scoreCell.appendChild(score);

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
        quoteLabel.innerHTML = "Quotes:";

        quoteLabel.className = "legend-header";
        quoteLegend.appendChild(quoteLabel);
        menuDiv.appendChild(quoteLegend);
        var quoteTable: any = document.createElement("TABLE");
        quoteTable.classList.add("menu-text");
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
        effortTable.classList.add("menu-text");
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

    public updateScore(p_government: Government): void {
        $("#financialScore").text(Math.round(p_government.getScore().getFinancialScore()));
        $("#socailScore").text(Math.round(p_government.getScore().getSocialScore()));
        $("#environmentalScore").text(Math.round(p_government.getScore().getEnvironmentalScore()));
    }
}
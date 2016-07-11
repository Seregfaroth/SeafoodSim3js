class MapMenu {

    constructor() {
        console.log("construct MapMenu");
        var menuDiv: HTMLElement = document.createElement("div");
        menuDiv.style.cssFloat = "left";
        menuDiv.style.width = "20%";
        document.getElementById("mainDiv").appendChild(menuDiv);


        var taxDiv: HTMLElement = document.createElement("div");
        menuDiv.appendChild(taxDiv);

        var taxLabel: HTMLElement = document.createElement("div");
        taxLabel.innerHTML = "Taxing rate:";
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

        var buttonsDiv: HTMLElement = document.createElement("div");
        menuDiv.appendChild(buttonsDiv);

        var startButton: HTMLButtonElement = document.createElement("button");
        startButton.innerHTML = "start";
        startButton.id = "startButton";
        startButton.style.margin = "10px";
        startButton.className = "ui-button";
        buttonsDiv.appendChild(startButton);

        var pauseButton: HTMLButtonElement = document.createElement("button");
        pauseButton.innerHTML = "pause";
        pauseButton.id = "pauseButton";
        pauseButton.style.margin = "10px";
        pauseButton.className = "ui-button";
        buttonsDiv.appendChild(pauseButton);
    }
}
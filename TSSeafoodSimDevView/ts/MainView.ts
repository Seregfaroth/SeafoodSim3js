class MainView {
    private m_mapView: MapView;
    private m_mapMenu: MapMenu;

    constructor() {
        this.m_mapView = new MapView();
        this.m_mapMenu = new MapMenu();
    }

    updateMainView() {
        console.log("updating mainView");
        this.m_mapView.updateMapView();
    }

}
/// <reference path = "../../TSSeafoodSimDev/externals/model.d.ts"/>

class MainView {
    private m_mapView: MapView;
    private m_mapMenu: MapMenu;

    constructor(p_map: Map, p_ShipOwners: ShipOwner[]) {
        this.m_mapView = new MapView(p_map);
        this.m_mapMenu = new MapMenu(p_ShipOwners, p_map.getLandingSites());
    }

    updateMainView(p_map: Map) {
        console.log("updating mainView");

        this.m_mapView.updateMapView(p_map);
    }

}
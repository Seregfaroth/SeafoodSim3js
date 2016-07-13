/// <reference path="model.d.ts" />
/// <reference path="wrappers.d.ts" />
declare class MainView {
    private m_mapView;
    private m_mapMenu;
    constructor(p_map: Map, p_ShipOwners: ShipOwner[]);
    updateMainView(p_model: Model): void;
}
declare class MapMenu {
    constructor(p_ShipOwners: ShipOwner[], p_LandingSites: LandingSite[]);
    updateScore(p_government: Government): void;
}
declare class MapView {
    private m_renderer;
    private m_camera;
    private m_scene;
    private m_geometry;
    private m_mapTile;
    private m_redMaterial;
    private m_greenMaterial;
    private m_blueMaterial;
    private m_yellowMaterial;
    private m_whiteMaterial;
    private m_blackMaterial;
    private m_fishMat;
    private m_noM;
    private m_schools;
    private m_ships;
    constructor(p_map: Map);
    updateMapView(p_map: Map): void;
}

/// <reference path="model.d.ts" />
/// <reference path="wrappers.d.ts" />
declare class MainView {
    private m_mapView;
    private m_mapMenu;
    constructor(p_map: Map);
    updateMainView(p_map: Map): void;
}
declare class MapMenu {
    constructor();
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
    private m_noM;
    constructor(p_map: Map);
    updateMapView(p_map: Map): void;
}

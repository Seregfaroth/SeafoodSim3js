/// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
/// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
/// <reference path = "../../TSSeafoodSimDev/externals/model.d.ts"/>


class MapView {
    private m_renderer: TKN_Renderer;
    private m_camera: TKN_Camera;
    private m_scene: TKN_Scene;
    private m_geometry: TKN_Geometry;
    private m_mapTile: TKN_Mesh[][] = [];
    private m_redMaterial: TKN_material;
    private m_greenMaterial: TKN_material;
    private m_blueMaterial: TKN_material;
    private m_yellowMaterial: TKN_material;
    private m_noM;
    
    constructor(p_map: Map) {
        console.log("The View construct");
        this.m_renderer = new TKN_Renderer();
        this.m_camera = new TKN_Camera();
        //this.m_camera.m_camera.position.z = 5;
        this.m_camera.m_camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.m_scene = new TKN_Scene();
        this.m_geometry = new TKN_Geometry();
        this.m_redMaterial = new TKN_material(e_color.Red);
        this.m_greenMaterial = new TKN_material(e_color.Green);
        this.m_blueMaterial = new TKN_material(e_color.Blue);
        this.m_yellowMaterial = new TKN_material(e_color.Yellow);
        this.m_noM = new TKN_material(1);
        
        //console.log("map: " + p_map.getTile);
        for (var h = 0; h < p_map.getMapHeight(); h++) {
            //debugger;
            var rot = 0;
            this.m_mapTile[h] = [];
            for (var w = 0; w < p_map.getMapWidth(); w++) {
                var pos = new Point(h, w);
                console.log((p_map.getTile(pos) instanceof  Ocean) + " " + h + "  " + w);
                if (p_map.getTile(pos) instanceof  Ocean) 
                    this.m_mapTile[h][w] = new TKN_Mesh(this.m_geometry, this.m_blueMaterial);
                else if (p_map.getTile(pos) instanceof Land)
                    this.m_mapTile[h][w] = new TKN_Mesh(this.m_geometry, this.m_greenMaterial);
                else if (p_map.getTile(pos) instanceof LandingSite)
                    this.m_mapTile[h][w] = new TKN_Mesh(this.m_geometry, this.m_redMaterial);
                else if (p_map.getTile(pos) instanceof FuelSite)
                    this.m_mapTile[h][w] = new TKN_Mesh(this.m_geometry, this.m_yellowMaterial); 
                else
                    this.m_mapTile[h][w] = new TKN_Mesh(this.m_geometry, this.m_noM); 
                this.m_mapTile[h][w].setPosition(4-h, w-4);
                
                this.m_scene.m_scene.add(this.m_mapTile[h][w].m_mesh);           
            }          
        }
        document.body.appendChild(this.m_renderer.m_renderer.domElement);
        
    }

    updateMapView(p_map: Map) {
        console.log("updating MapView");
        this.m_renderer.m_renderer.render(this.m_scene.m_scene, this.m_camera.m_camera);
    }
}
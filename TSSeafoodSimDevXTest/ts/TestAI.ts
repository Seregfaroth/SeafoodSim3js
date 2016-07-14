class TestAI {
    public constructor() {
        var ai: AI = new AI();
        var map: Map = new Map(5, 0, new Restrictions());
        var richShipOwner: ShipOwner = new ShipOwner(new Point2(0, 0), "0", 10000000000000000000);
        var poorShipOwner: ShipOwner = new ShipOwner(new Point2(0, 0), "1", -10000000000000000000);

        QUnit.test("AI: findNearestLandingSite", function (assert) {
            map.emptyGrid();
            map.getGrid()[2][2] = new LandingSite(1, 10, 1, {},1,"0");

            assert.deepEqual(ai.findNearestLandingSite(new Point2(2, 2), map), new Point2(2, 2), "Should find nearest landing site at 2,2");
            assert.deepEqual(ai.findNearestLandingSite(new Point2(0, 0), map), new Point2(2, 2), "Should find nearest landing site at 2,2");
            assert.deepEqual(ai.findNearestLandingSite(new Point2(4, 4), map), new Point2(2, 2), "Should find nearest landing site at 2,2");
            assert.deepEqual(ai.findNearestLandingSite(new Point2(1, 3), map), new Point2(2, 2), "Should find nearest landing site at 2,2");
        });

        QUnit.test("AI: findNearestLandingSite with multiple sites", function (assert) {
            map.emptyGrid();
            map.getGrid()[0][4] = new LandingSite(1, 10, 1, {}, 1, "0");
            map.getGrid()[3][0] = new LandingSite(1, 10, 1, {}, 1, "1");
            
            assert.deepEqual(ai.findNearestLandingSite(new Point2(0, 0), map), new Point2(3, 0), "Nearest from 0,0 should be 3,0");
            assert.deepEqual(ai.findNearestLandingSite(new Point2(4, 0), map), new Point2(3, 0), "Nearest from 4,0 should be 3,0");
            assert.deepEqual(ai.findNearestLandingSite(new Point2(0, 2), map), new Point2(0, 4), "Nearest from 0,2 should be 0,4");
            assert.deepEqual(ai.findNearestLandingSite(new Point2(2, 3), map), new Point2(0, 4), "Nearest from 2,3 should be 0,4");
            assert.deepEqual(ai.findNearestLandingSite(new Point2(4, 4), map), new Point2(0, 4), "Nearest from 4,4 should be 0,4");
        });

        QUnit.test("AI: buy ship", function (assert) {
            assert.deepEqual(richShipOwner.getShips(), [], "rich ship owner should not have any ships");
            assert.deepEqual(poorShipOwner.getShips(), [], "poor ship owner should not have any ships");
            ai.run(richShipOwner, map);
            //Check if owner has bought ship
            assert.deepEqual(richShipOwner.getShips().length, 1, "rich ship owner should have one ship");

            ai.run(poorShipOwner, map);
            //Poor ship owner should not buy a new ship
            assert.deepEqual(poorShipOwner.getShips().length, 0, "poor ship owner should still have 0 ships");
        });

        QUnit.test("AI: sell ship", function (assert) {
            poorShipOwner.buyShip();
            assert.deepEqual(poorShipOwner.getShips().length, 1, "poor ship owner should have 1 ship");
             ai.run(poorShipOwner, map);
            //Poor ship owner should sell his ship
             assert.deepEqual(poorShipOwner.getShips().length, 0, "poor ship owner should have 0 ships");

             richShipOwner.buyShip();
             var noOfShips: number = richShipOwner.getShips().length;

             ai.run(richShipOwner, map);
             assert.ok(richShipOwner.getShips().length >= noOfShips, "rich ship owner should not sell any of his ships");
        });
    }

}
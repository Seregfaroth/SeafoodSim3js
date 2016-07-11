/// <reference path = "../../TSSeafoodSimDevXTest/ts/declarations/qunit.d.ts"/>
/// <reference path = "../../TSSeafoodSimDev/externals/model.d.ts"/>

class TestShip {
    constructor() {
        var owner: ShipOwner = new ShipOwner(new Point2(0,0), "0");
        var ship: Ship = new Ship(owner);


        QUnit.test("Ship: Constructor", function (assert) {
            var testShip: Ship;
            //Check that ship is undefined
            assert.equal(testShip, undefined);

            //Create ship and check members
            testShip = new Ship(owner);
            assert.ok(testShip);
            assert.deepEqual(testShip.getCargo(), []);
            assert.deepEqual(testShip.getFuel(), testShip.getFuelCapacity());
        });

        QUnit.test("Ship: Follow path", function (assert) {
            var point: Point2 = new Point2(ship.getPosition().row, ship.getPosition().col + 1);
            var path: Point2[] = [ship.getPosition(), point, point];
            var fuel: number = ship.getFuel();
            ship.setPath(path);
            assert.notDeepEqual(ship.getPosition(), point);

            ship.followPath();
            //Check that the ship has moved to the next point in the path
            assert.deepEqual(ship.getPosition(), point);
            //Check that the ship has used fuel
            assert.deepEqual(ship.getFuel(), fuel - ship.getFuelPerMove());
        });

        QUnit.test("Ship: follow path exception", function (assert) {
            var path: Point2[] = [new Point2(0, 0), new Point2(1, 0)];
            ship.setPath(path);
            ship.followPath();
            //Check that the function throws an error
            assert.throws(function () {
                ship.followPath();
            }, Error, "should throw an error");
        });

        QUnit.test("Ship: has reached goal", function (assert) {
            var goal: Point2 = new Point2(ship.getPosition().row, ship.getPosition().col + 1);
            var path: Point2[] = [ship.getPosition(), goal];
            ship.setPath(path);
            assert.ok(!ship.hasReachedGoal());
            ship.followPath();
            //Check that the ship has reached the goal
            assert.ok(ship.hasReachedGoal());
        });

        QUnit.test("Ship: fish", function (assert) {
            assert.ok(true);
            //TODO test after place fish has been implemented
        });

        QUnit.test("Ship: land", function (assert) {
            assert.ok(true)
            //TODO test after place fish has been implemented

        });

        QUnit.test("Ship: refuel", function (assert) {
            var fuelSite: FuelSite = new FuelSite(1, 100, 1, 1);
            var balance: number = ship.getOwner().getBalance();
            ship.setPath([new Point2(0, 0), new Point2(0, 1)]);
            ship.followPath();
            var fuel: number = ship.getFuel();
            //Check that the ship has used fuel
            assert.notDeepEqual(ship.getFuel(), ship.getFuelCapacity(),"ships fuel tank should not be full");
            ship.refuel(fuelSite);
            //Check that the ship has refueled
            assert.deepEqual(ship.getFuel(), ship.getFuelCapacity(), "ship should have been refueled");
            //Check that the ship owner has been charged
            assert.deepEqual(ship.getOwner().getBalance(), balance - fuelSite.getPrice() * (ship.getFuel() - fuel), "owner should have been charged");
        });


    }
}
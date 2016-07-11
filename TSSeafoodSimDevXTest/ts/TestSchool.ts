
/// <reference path = "../../TSSeafoodSimDev/externals/wrappers.d.ts"/>
/// <reference path = "../../TSSeafoodSimDevXTest/ts/declarations/qunit.d.ts"/>
/// <reference path = "../../TSSeafoodSimDev/externals/model.d.ts"/>

class TestSchool {
    constructor() {
        var startPosition: Point2 = new Point2(0, 0); 
        var singleCod: Cod;
        var singleMackerel: Mackerel;
        var map: Map = new Map(5, 5, new Restrictions());

        QUnit.test("Cod: constructor", function (assert) {
            //Check that singleCod is undefined
            assert.equal(singleCod, undefined);

            //Create cod and check members
            singleCod = new Cod(1, startPosition);
            assert.ok(singleCod);
            assert.deepEqual(singleCod.getSize(), 1);
            assert.deepEqual(singleCod.getPosition(), startPosition);
        });
        QUnit.test("Cod: age function", function (assert) {
            var age: number = singleCod.getFish()[0].getAge();
            if (age < singleCod.getMaxAge()) {
                singleCod.live(map);
                var newAge: number = singleCod.getFish()[0].getAge();
                assert.equal(newAge, age + 1);
            }
        });

        QUnit.test("Cod: natural death", function (assert) {
            var testingFish: Fish = singleCod.getFish()[0];
            var age: number = testingFish.getAge();
            //Make cod grow old
            for (var i = age; i < singleCod.getMaxAge(); i++) {
                singleCod.live(map);
            }
            //Check that fish is old
            assert.deepEqual(testingFish.getAge(), singleCod.getMaxAge());

            singleCod.live(map);

            //Check that fish is removed from school
            assert.deepEqual(singleCod.getFish().indexOf(testingFish), -1);
        });
        QUnit.test("Mackerel: constructor", function (assert) {
            //Check that singleMackerel is undefined
            assert.equal(singleMackerel, undefined);

            //Create mackerel and check members
            singleMackerel = new Mackerel(1, startPosition);
            assert.ok(singleMackerel);
            assert.deepEqual(singleMackerel.getSize(), 1);
            assert.deepEqual(singleMackerel.getPosition(), startPosition);
        });
        QUnit.test("Mackerel: age function", function (assert) {
            var age: number = singleMackerel.getFish()[0].getAge();
            if (age < singleMackerel.getMaxAge()) {
                singleMackerel.live(map);
                var newAge: number = singleMackerel.getFish()[0].getAge();
                assert.equal(newAge, age + 1);
            }
        });

        QUnit.test("Mackerel: natural death", function (assert) {
            var testingFish: Fish = singleMackerel.getFish()[0];
            var age: number = testingFish.getAge();
            //Make cod grow old
            for (var i = age; i < singleMackerel.getMaxAge(); i++) {
                singleMackerel.live(map);
            }
            //Check that fish is old
            assert.deepEqual(testingFish.getAge(), singleMackerel.getMaxAge());

            singleMackerel.live(map);

            //Check that fish is removed from school
            assert.deepEqual(singleMackerel.getFish().indexOf(testingFish), -1);
        });
    }
}
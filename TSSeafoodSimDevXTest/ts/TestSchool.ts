/// <reference path = "../../TSSeafoodSimDevXTest/ts/declarations/qunit.d.ts"/>
/// <reference path = "../../TSSeafoodSimDev/externals/model.d.ts"/>

class TestSchool {
    constructor() {
        var singleCod: Cod = new Cod(1, new Point(5, 5));
        var singleMackerel: Mackerel = new Mackerel(1, new Point(5, 5));
        var map: Map = new Map(5, 5, new Restrictions());

        QUnit.test("Cod constructor", function (assert) {

        });
        QUnit.test("Cod age function", function (assert) {
            var age: number = singleCod.getFish()[0].getAge();
            if (age < singleCod.getMaxAge()) {
                singleCod.live(map);
                var newAge: number = singleCod.getFish()[0].getAge();
                assert.equal(newAge, age + 1);
            }
        });

        QUnit.test("Cod natural death", function (assert) {
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

        QUnit.test("Mackerel age function", function (assert) {
            var age: number = singleMackerel.getFish()[0].getAge();
            if (age < singleMackerel.getMaxAge()) {
                singleMackerel.live(map);
                var newAge: number = singleMackerel.getFish()[0].getAge();
                assert.equal(newAge, age + 1);
            }
        });

        QUnit.test("Cod natural death", function (assert) {
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
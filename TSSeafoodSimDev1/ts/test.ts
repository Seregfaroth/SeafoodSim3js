QUnit.test("hello test", function (assert) {
    assert.equal(4, 4, "asdfg");
});

QUnit.module("PathFinding");
QUnit.test("FindPath", function (assert) {
    var nav = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    var pf = new TKN_PathFinding(nav);
    assert.deepEqual([[0, 0], [1, 0], [2, 0]], pf.findPath(0, 0, 2, 0), "path"); 
}); 

describe('findAndReplace', function() {

  it("can find a single letter, and replace it with itself.", function() {
    expect(findAndReplace(["a", "a", "a"])).to.equal("a");
  });

});

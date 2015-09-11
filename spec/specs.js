describe('findAndReplace', function() {

  it("can find a single letter; replace it with itself.",
    function() {
    expect(findAndReplace("a", "a", "a")).to.equal("a");
  });

  it("can find a single letter; replace it with a different letter.",
    function() {
    expect(findAndReplace("a", "a", "b")).to.equal("b");
  });

  it("can find a simple word amongst two words; replace it with another word.",
    function() {
    expect(findAndReplace("the dog", "dog", "cat")).to.equal("the cat");
  });

  it("can replace a couple instances of a word.",
    function() {
    expect(findAndReplace("the dog is a dog", "dog", "cat")).to.equal("the cat is a cat");
  });

  it("can replace a couple instances of a word, despite a period.",
    function() {
    expect(findAndReplace("The dog is a dog.", "dog", "cat")).to.equal("The cat is a cat.");
  });

  it("won't replace a word nested inside another word.",
    function() {
    expect(findAndReplace("My dog is named Dogbert.", "dog", "cat")).to.equal("My cat is named Dogbert.");
  });

});

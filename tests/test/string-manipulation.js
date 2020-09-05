const Strings = artifacts.require("Strings");

contract("Strings", () => {
	let strings = null;
	before(async () => {
		strings = await Strings.deployed();
	});

	it("Should provide string length", async () => {
		const str = await strings.length("hello");
		assert.equal(str, 5);
	});
});

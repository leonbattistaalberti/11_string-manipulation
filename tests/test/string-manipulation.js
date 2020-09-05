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

	it("Should concatenate 2 strings", async () => {
		const str_1 = "Hi";
		const str_2 = "_Everybody";

		const concatString = await strings.concatenate(str_1, str_2);

		assert.equal(concatString, `${str_1}${str_2}`);
	});
});

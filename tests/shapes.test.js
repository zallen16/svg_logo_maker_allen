const Shape=require("../lib/shapes.js");

describe("Test for Shape class", () => {
    it("Successfully creates a shape", () => {
        const testShape = new Shape("tex", "blue", "blue")
        expect(typeof testShape).toBe("object")
    })
})
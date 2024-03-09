const Rectangle=require("../lib/rectangle.js");

describe("Test for Rectangle class", () => {
    it("Successfully creates a rectangle", () => {
        const testRectangle = new Rectangle("tex", "blue", "blue")
        expect(typeof testRectangle).toBe("object")
    }) 
})
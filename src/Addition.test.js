import Addition from './Addition';

describe("Addition class", () => {
    const addition = new Addition();

    it("should add two numbers together", () => {
        expect(addition.add(1, 3)).toBe(4);
    });

    it("should return the factorial of a number", () => {
        expect(addition.factorial(5)).toBe(120);
    });
    it("should return 1 for the factorial of 0", () => {
        expect(addition.factorial(0)).toBe(1);
    });
    it("should return -1 for the factorial of a value less than 0", () => {
        expect(addition.factorial(-5)).toBe(-1);
    });

    it("should return true if the word given is a palidrome", () => {
        expect(addition.palindrome("racecar")).toBe(true);
    });
    it('should return false if the word given is not a palindrome', () => {
        expect(addition.palindrome("nope")).toBe(false);
    })
});

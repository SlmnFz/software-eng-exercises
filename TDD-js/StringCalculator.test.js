const StringCalculator = require("./StringCalculator");

describe("StringCalculator AddV1 Method", () => {
    /**
     * @type {StringCalculator}
     */
    let instance;

    beforeEach(() => {
        instance = new StringCalculator();
    });

    test("should return 0 when input is undefined", () => {
        expect(instance.AddV1()).toBe(0);
    });

    test("should return 0 when input is an empty string", () => {
        expect(instance.AddV1("")).toBe(0);
    });

    test("should return the number itself when input has one number", () => {
        expect(instance.AddV1("1")).toBe(1);
    });

    test("should return the sum of two numbers", () => {
        expect(instance.AddV1("1,5")).toBe(6);
    });

    test("should throw an error when more than two numbers are provided", () => {
        expect(() => instance.AddV1("1,2,5")).toThrow("The method can only take 0, 1, or 2 numbers.");
    });

    test("should throw an error when input contains non-numeric values", () => {
        expect(() => instance.AddV1("x,2")).toThrow("All inputs must be valid numbers.");
    });

    test("should handle whitespace in the input gracefully", () => {
        expect(instance.AddV1(" 1 , 2 ")).toBe(3);
    });
});

describe("StringCalculator AddV2 Method", () => {
    /**
     * @type {StringCalculator}
     */
    let instance;

    beforeEach(() => {
        instance = new StringCalculator();
    });

    test("should return 0 when input is undefined", () => {
        expect(instance.AddV2()).toBe(0);
    });

    test("should return 0 when input is an empty string", () => {
        expect(instance.AddV2("")).toBe(0);
    });

    test("should return the number itself when input has one number", () => {
        expect(instance.AddV2("1")).toBe(1);
    });

    test("should return the sum of numbers", () => {
        expect(instance.AddV2("1,5")).toBe(6);
    });

    test("should return the sum of numbers", () => {
        expect(instance.AddV2("1,5,7,9")).toBe(22);
    });

    test("should throw an error when input contains non-numeric values", () => {
        expect(() => instance.AddV2("x,2")).toThrow("All inputs must be valid numbers.");
    });

    test("should handle whitespace in the input gracefully", () => {
        expect(instance.AddV2(" 1 , 2 ")).toBe(3);
    });
});

describe("StringCalculator AddV3 Method", () => {
    /**
     * @type {StringCalculator}
     */
    let instance;

    beforeEach(() => {
        instance = new StringCalculator();
    });

    test("should return sum of numbers by two delimeter", () => {
        expect(instance.AddV3("1\n2,3")).toBe(6);
    });

    test("should return sum of numbers by two delimeter", () => {
        expect(instance.AddV3("1\n2,3\n4,5")).toBe(15);
    });
});

describe("StringCalculator AddV4 Method", () => {
    /**
     * @type {StringCalculator}
     */
    let instance;

    beforeEach(() => {
        instance = new StringCalculator();
    });

    test("should return 0 when input is undefined", () => {
        expect(instance.AddV4()).toBe(0);
    });

    test("should return 0 when input is an empty string", () => {
        expect(instance.AddV4("")).toBe(0);
    });

    test("should return the sum of numbers with the default delimiter", () => {
        expect(instance.AddV4("1;2;3")).toBe(6);
    });

    test("should return the sum of numbers with a custom delimiter", () => {
        expect(instance.AddV4("//#\n4#5#6")).toBe(15);
    });

    test("should return the number itself when input has one number with a custom delimiter", () => {
        expect(instance.AddV4("//@\n8")).toBe(8);
    });

    test("should use the default delimeter and return the sum", () => {
        expect(instance.AddV4("//\n1;2")).toBe(3);
    });

    test("should throw an error when input contains non-numeric values", () => {
        expect(() => instance.AddV4("//;\n1;abc;3")).toThrow("All inputs must be valid numbers.");
    });

    test("should handle whitespace around delimiters and numbers gracefully", () => {
        expect(instance.AddV4("//;\n 1 ; 2 ; 3 ")).toBe(6);
    });

    test("should handle a mix of delimiters and throw an error (no mixed delimiters allowed)", () => {
        expect(() => instance.AddV4("1\n2;3")).toThrow("All inputs must be valid numbers.");
    });

    test("should return the sum when using the default delimiter without specifying a custom one", () => {
        expect(instance.AddV4("4;5;6")).toBe(15);
    });

    test("should return 0 when the custom delimiter is provided but no numbers follow", () => {
        expect(instance.AddV4("//;\n")).toBe(0);
    });

    test("should handle a single number with the default delimiter", () => {
        expect(instance.AddV4("7;")).toBe(7);
    });
});

describe("StringCalculator AddV5 Method", () => {
    /**
     * @type {StringCalculator}
     */
    let instance;

    beforeEach(() => {
        instance = new StringCalculator();
    });

    test("should return 0 for an empty input", () => {
        expect(instance.AddV5("")).toBe(0);
    });

    test("should sum numbers separated by the default delimiter (;)", () => {
        expect(instance.AddV5("1;2;3")).toBe(6);
    });

    test("should handle a custom delimiter defined with // at the start", () => {
        expect(instance.AddV5("//;\n1;2;3")).toBe(6);
    });

    test("should throw an error for invalid custom delimiter format", () => {
        expect(() => instance.AddV5("//;\n")).toThrow("Invalid format: Custom delimiter must be followed by numbers.");
    });

    test("should throw an error for invalid numbers in the input", () => {
        expect(() => instance.AddV5("1;a;3")).toThrow("All inputs must be valid numbers.");
    });

    test("should throw an error if input contains a single negative number", () => {
        expect(() => instance.AddV5("1;-2;3")).toThrow("Negatives not allowed: -2");
    });

    test("should throw an error listing all negative numbers in the input", () => {
        expect(() => instance.AddV5("1;-2;-3;4")).toThrow("Negatives not allowed: -2, -3");
    });

    test("should handle multiple numbers and return their sum", () => {
        expect(instance.AddV5("1;2;3;4;5")).toBe(15);
    });

    test("should handle a custom delimiter with multiple characters", () => {
        expect(instance.AddV5("//***\n1***2***3")).toBe(6);
    });

    test("should ignore extra whitespace in input", () => {
        expect(instance.AddV5("  1 ; 2 ; 3 ")).toBe(6);
    });
});

describe("StringCalculator GetCalledCount Method", () => {
    /**
     * @type {StringCalculator}
     */
    let instance;

    beforeEach(() => {
        instance = new StringCalculator();
    });

    test("should return 0 when no Add method has been invoked", () => {
        expect(instance.GetCalledCount()).toBe(0);
    });

    test("should return the correct count after AddV1 is invoked multiple times", () => {
        instance.AddV1("1,2");
        instance.AddV1("3,4");
        expect(instance.GetCalledCount()).toBe(2);
    });

    test("should return the correct count after AddV2 is invoked multiple times", () => {
        instance.AddV2("1,2,3");
        instance.AddV2("");
        instance.AddV2("5");
        expect(instance.GetCalledCount()).toBe(3);
    });

    test("should return the correct count when different Add methods are invoked", () => {
        instance.AddV1("1,2");
        instance.AddV3("1\n2,3");
        instance.AddV5("1;2;3");
        expect(instance.GetCalledCount()).toBe(3);
    });
});
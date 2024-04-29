import { calculator, capitalize, reverseString } from "./projectCoolFunctions";
import { test, describe, expect } from "@jest/globals";

describe("test capitalize function", () => {
    test("capitalize my name", () => {
        expect(capitalize("eduarte")).toBe("Eduarte");
    });

    test("Should return empty string if the input is empty", () => {
        expect(capitalize("")).toBe("");
    });
});
describe("test reverseString function", () => {
    test("reversing a string", () => {
        expect(reverseString("eduarte")).toBe("etraude");
    });

    test("reversing the same string two times", () => {
        expect(reverseString(reverseString("hello world"))).toBe("hello world");
    });

    test("empty string case", () => {
        expect(reverseString("")).toBe("");
    });
});
describe("Test calculator object", () => {
    const calc = calculator;
    test("add", () => {
        expect(calc.add(10, 15)).toBe(10 + 15);
    });
    test("sub", () => {
        expect(calc.subtract(10, 15)).toBe(10 - 15);
    });
    test("multiply", () => {
        expect(calc.multiply(10, 15)).toBe(10 * 15);
    });
    test("divide", () => {
        expect(calc.divide(10, 15)).toBe(10 / 15);
    });
});

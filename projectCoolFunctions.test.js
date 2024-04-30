import {
    analyzeArray,
    caesarCipher,
    calculator,
    capitalize,
    reverseString,
} from "./projectCoolFunctions";
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
describe("Test caesarCipher function", () => {
    test("wrapping from z to a", () => {
        expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 2)).toBe("cdefghijklmnopqrstuvwxyzab");
    });
    test("wrapping and keeping the case", () => {
        expect(caesarCipher("abcDefGhijklmnopqrstuvwxyz", 2)).toBe("cdeFghIjklmnopqrstuvwxyzab");
    });
    test("negative and over 26 numbers", () => {
        expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", -27)).toBe("bcdefghijklmnopqrstuvwxyza");
        expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 27)).toBe("bcdefghijklmnopqrstuvwxyza");
    });
});
describe("Test analyze function", () => {
    test("test everything", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });

    test("test array with one element", () => {
        expect(analyzeArray([25])).toStrictEqual({
            average: 25,
            min: 25,
            max: 25,
            length: 1,
        });
    });
    test("test array with zero element", () => {
        expect(() => analyzeArray([])).toThrowError();
    });
});

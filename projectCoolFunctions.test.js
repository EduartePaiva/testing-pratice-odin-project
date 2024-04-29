import { capitalize, reverseString } from "./projectCoolFunctions";
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

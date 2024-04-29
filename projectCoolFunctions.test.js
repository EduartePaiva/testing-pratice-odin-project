import { capitalize } from "./projectCoolFunctions";
import { test, describe, expect } from "@jest/globals";

describe("test capitalize function", () => {
    test("capitalize my name", () => {
        expect(capitalize("eduarte")).toBe("Eduarte");
    });
});

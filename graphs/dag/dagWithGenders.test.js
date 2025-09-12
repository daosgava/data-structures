import assert from "node:assert";
import test, { describe } from "node:test";
import { findSiblingsbyGender } from "./dagWithGenders.js";

const person = "juan";
const gender = "female";

describe("dag with genders", () => {
  test("get juan's parents", () => {
    const femaleSiblings = findSiblingsbyGender(person, gender);
    const actualFemaleSiblings = ["alice"];
    femaleSiblings.forEach((sibling) =>
      assert.equal(actualFemaleSiblings.includes(sibling), true),
    );

    assert.strictEqual(femaleSiblings.length, actualFemaleSiblings.length);
  });
});

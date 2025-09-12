import assert from "node:assert";
import test, { describe } from "node:test";
import {
  getParents,
  getChildren,
  findRelativesByFunction,
  findSiblings,
} from "./dag.js";
import { family } from "./data/familyTree.js";

const people = {
  john: "john",
  miguel: "miguel",
  alice: "alice",
  miguel: "miguel",
};

describe("dag", () => {
  test("get john's parents", () => {
    const parents = getParents(people.john);
    assert.strictEqual(parents, family.john.parents);
  });
  test("get john's children", () => {
    const children = getChildren(people.john);
    assert.strictEqual(children, family.john.children);
  });
  test("get miguel's ancestors", () => {
    const ancestors = findRelativesByFunction(people.miguel, getParents);
    const actualAncestors = ["gabriel", "paola", "mary", "john"];
    ancestors.forEach((ancestor) => actualAncestors.includes(ancestor));
    assert(ancestors.length, actualAncestors.length);
  });
  test("get alice's decendants", () => {
    const decendants = findRelativesByFunction(people.alice, getChildren);
    const actualDecendants = ["peter", "linda"];
    decendants.forEach((decendant) => actualDecendants.includes(decendant));
    assert(decendants.length, actualDecendants.length);
  });
  test("get miguel's siblings", () => {
    const siblings = findSiblings(people.miguel);
    const actualSiblings = ["alice", "juan", "alex"];
    siblings.forEach((sibling) =>
      assert.equal(actualSiblings.includes(sibling), true),
    );
    assert(siblings.length, actualSiblings.length);
  });
});

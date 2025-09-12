import { family } from "./data/familyTree.js";

// Directed Acyclic Graph
/*
  Gabriel   Paola   Mary
    |_______|______|
            |
            John
            |
    ________|________
    |   |    |     |
  Alice Juan Alex Miguel
  __|__
  |   |
Peter Linda
*/

export const getParents = (name) => family[name].parents || [];

export const getChildren = (name) => family[name].children || [];

export const findRelativesByFunction = (name, fn) => {
  const relatives = [];
  for (const relative of fn(name)) {
    const family = findRelativesByFunction(relative, fn);

    relatives.push(relative, ...family);
  }

  return relatives;
};

export const findSiblings = (name) => {
  const siblings = [];
  for (const child of getChildren(getParents(name)[0])) {
    if (child !== name) {
      siblings.push(child);
    }
  }
  return siblings;
};

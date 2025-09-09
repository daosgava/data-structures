import { family } from "./data/familyTree.js";

// Directed Acyclic Graph

/*
Gabriel Paola
    |___|
      |
    john mary
      |___|
        |
      Alice
        |
      |   |
  Peter   Linda
*/

const getParents = (name) => family[name].parents || [];

const getChildren = (name) => family[name].children || [];

const person = "john";

console.log(
  `${person}'s parents: ${getParents(person)} | ${person}'s children: ${getChildren(person)}`,
);

const findAllByFunction = (name, fn) => {
  const ancestors = [];
  for (const parent of fn(name)) {
    const relatives = findAllByFunction(parent, fn);

    ancestors.push(parent, ...relatives);
  }

  return ancestors;
};

const person2 = "miguel";

console.log(
  `${person2}'s ancestors: ${findAllByFunction(person2, getParents)}`,
);

const person3 = "alice";

console.log(
  `${person3}'s decendants: ${findAllByFunction(person3, getChildren)}`,
);

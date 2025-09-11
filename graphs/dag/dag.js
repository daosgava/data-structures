// import { family } from "./data/familyTree.js";
import { familyWG as family } from "./data/familyTreeWithGender.js";

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

const findRelativesByFunction = (name, fn) => {
  const relatives = [];
  for (const relative of fn(name)) {
    const family = findRelativesByFunction(relative, fn);

    relatives.push(relative, ...family);
  }

  return relatives;
};

const person2 = "miguel";

console.log(
  `${person2}'s ancestors: ${findRelativesByFunction(person2, getParents)}`,
);

const person3 = "alice";

console.log(
  `${person3}'s decendants: ${findRelativesByFunction(person3, getChildren)}`,
);

const findSiblings = (name) => {
  const siblings = [];
  for (const child of getChildren(getParents(name)[0])) {
    if (child !== name) {
      siblings.push(child);
    }
  }
  return siblings;
};

const person4 = "miguel";

console.log(`${person4}'s siblings: ${findSiblings(person4)}`);

const findSiblingsbyGender = (name, gender) => {
  const siblings = [];
  for (const child of getChildren(getParents(name)[0])) {
    if (child !== name && family[child].gender === gender) {
      siblings.push(child);
    }
  }
  return siblings;
};

const person5 = "juan";
const gender = "female";

console.log(
  `${person5}'s ${gender} siblings: ${findSiblingsbyGender(person5, gender)}`,
);

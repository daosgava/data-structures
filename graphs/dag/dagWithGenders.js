import { familyWG as family } from "./data/familyTreeWithGender.js";
import { getChildren, getParents } from "./dag.js";

// Directed Acyclic Graph
/*
Gabriel(M)   Paola(F)   Mary(F)
     |_________|_________|
               |
             John(M)
               |
     __________|___________
     |    |      |       |
 Alice(F) Juan(M) Alex(M) Miguel(M)
     |
    _|_
    | |
 Peter(M) Linda(F)
*/

export const findSiblingsbyGender = (name, gender) => {
  const siblings = [];
  for (const child of getChildren(getParents(name)[0])) {
    if (child !== name && family[child].gender === gender) {
      siblings.push(child);
    }
  }
  return siblings;
};

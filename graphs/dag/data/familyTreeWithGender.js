export const family = {
  gabriel: { parents: [], children: ["john"], gender: "male" },
  paola: { parents: [], children: ["john"], gender: "female" },
  john: {
    parents: ["gabriel", "paola"],
    children: ["alice", "juan", "alex", "miguel"],
    gender: "male",
  },
  mary: {
    parents: [],
    children: ["alice", "juan", "alex", "miguel"],
    gender: "female",
  },
  alice: {
    parents: ["john", "mary"],
    children: ["peter", "linda"],
    gender: "female",
  },
  peter: { parents: ["alice"], children: [], gender: "male" },
  linda: { parents: ["alice"], children: [], gender: "female" },
  juan: { parents: ["alice"], children: [], gender: "male" },
  alex: { parents: ["mary", "john"], children: [], gender: "male" },
  miguel: { parents: ["mary", "john"], children: [], gender: "male" },
};

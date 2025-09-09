export const family = {
  gabriel: { parents: [], children: ["john"] },
  paola: { parents: [], children: ["john"] },
  john: {
    parents: ["gabriel", "paola"],
    children: ["alice", "juan", "alex", "miguel"],
  },
  mary: { parents: [], children: ["alice", "juan", "alex", "miguel"] },
  alice: { parents: ["john", "mary"], children: ["peter", "linda"] },
  peter: { parents: ["alice"], children: [] },
  linda: { parents: ["alice"], children: [] },
  juan: { parents: ["alice"], children: [] },
  alex: { parents: ["mary", "john"], children: [] },
  miguel: { parents: ["mary", "john"], children: [] },
};

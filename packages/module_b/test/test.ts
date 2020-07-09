import test from "ava";

import { b, subtract } from "..";

test("test b", (t) => {
  t.assert(b === "b");
});

test("test subtract", (t) => {
  t.assert(subtract(3, 1) === 2);
});

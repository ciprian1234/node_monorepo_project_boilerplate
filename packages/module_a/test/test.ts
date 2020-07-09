import test from "ava";

import { a, add } from "..";

test("test a", (t) => {
  t.assert(a === "a");
});

test("test add", (t) => {
  t.assert(add(3, 1) === 4);
});

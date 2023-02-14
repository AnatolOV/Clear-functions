import { healthRate } from "../index";

test("healthRate test", () => {
  let result1 = "healthy";
  let result2 = "wounded";
  let result3 = "critical";
  let object1 = { health: 100 };
  let object2 = { health: 49 };
  let object3 = { health: 1 };
  expect(healthRate(object1)).toEqual(result1);
  expect(healthRate(object2)).toEqual(result2);
  expect(healthRate(object3)).toEqual(result3);
});

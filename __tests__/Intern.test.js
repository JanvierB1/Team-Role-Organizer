const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const event = new Intern("wee", 6, "test@value.com", "UCLA");
  expect(event.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const event = new Intern("wee", 6, "test@value.com", testValue);
  expect(event.getSchool()).toBe(testValue);
});
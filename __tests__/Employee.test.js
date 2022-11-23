const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const event = new Employee();
  expect(typeof(event)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const event = new Employee(name);
  expect(event.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const event = new Employee("wee", testValue);
  expect(event.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@value.com";
  const event = new Employee("wee", 6, testValue);
  expect(event.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const event = new Employee(testValue);
  expect(event.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const event = new Employee("wee", testValue);
  expect(event.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@value.com";
  const event = new Employee("wee", 6, testValue);
  expect(event.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const event = new Employee("John", 6, "test@value.com");
  expect(event.getRole()).toBe(testValue);
});
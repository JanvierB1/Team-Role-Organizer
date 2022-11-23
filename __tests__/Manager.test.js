const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const event = new Manager("wee", 6, "test@value.com", testValue);
  expect(event.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const event = new Manager("wee", 6, "test@value.com", 100);
  expect(event.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const event = new Manager("wee", 6, "test@value.com", testValue);
  expect(event.getOfficeNumber()).toBe(testValue);
});
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const event = new Engineer("wee", 6, "test@value.com", testValue);
  expect(event.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const event = new Engineer("wee", 6, "test@value.com", "GitHubUser");
  expect(event.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const event = new Engineer("wee", 6, "test@value.com", testValue);
  expect(event.getGithub()).toBe(testValue);
});
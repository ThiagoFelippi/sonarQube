const userService = require("../../../src/services/userService")

describe("User Service Test", () => {
  let validUser = {}
  let invalidUser = {}

  beforeAll(() => {
    validUser = {
      name: "thiago",
      password: "12345"
    }
    invalidUser = {
      hello: "world"
    }
  })

  describe("create user", () => {
    it("Should be able to create User", () => {
      const user = userService.save(validUser)
      expect(user).toBe(validUser);
    })
  
    it("Don't should be able to create user with invalid credentials", () => {
      const user = userService.save(invalidUser)
      expect(user).toBeNull();
    })
  })

})
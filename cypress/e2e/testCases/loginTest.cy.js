import { loginLocator } from "../pageObjectModel/loginPage";
describe("Login test", () => {
  beforeEach(() => {
    cy.visit("/index.htm");
  });

  it("verify that user can login successfully", () => {
    cy.get(loginLocator.usernameField).type("eqGj0F");
    cy.get(loginLocator.passwordField).type("12345678");
    cy.get(loginLocator.loginBtn).click();
    cy.get(loginLocator.loginSuccessMsg)
      .should("exist")
      .and("have.text", "Welcome");
  });

  it("verify that login fails using invalid details", () => {
    cy.get(loginLocator.usernameField).type("Abc");
    cy.get(loginLocator.passwordField).type("1234567");
    cy.get(loginLocator.loginBtn).click();
    cy.get(loginLocator.loginErrorMsg).should("exist");
  });
});

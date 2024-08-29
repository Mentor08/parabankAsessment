import { dashboardLocator } from "../pageObjectModel/dashboardPage";
import { loginLocator } from "../pageObjectModel/loginPage";

describe("Logout functionality", () => {
  it("verify that user can logout successfully", () => {
    cy.visit("/index.htm");
    cy.get(loginLocator.usernameField).type("eqGj0F");
    cy.get(loginLocator.passwordField).type("12345678");
    cy.get(loginLocator.loginBtn).click();
    cy.get(dashboardLocator.logoutBtn).click();
    cy.get(loginLocator.loginTitle).should("exist");
  });
});

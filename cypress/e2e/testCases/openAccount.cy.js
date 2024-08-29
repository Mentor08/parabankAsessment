import { dashboardLocator } from "../pageObjectModel/dashboardPage";
import { loginLocator } from "../pageObjectModel/loginPage";
import { openAccountLocator } from "../pageObjectModel/openAccountPage";

describe("Open account functionality", () => {
  it("verify that user can open an account successfully", () => {
    cy.visit("/index.htm");
    cy.get(loginLocator.usernameField).type("eqGj0F");
    cy.get(loginLocator.passwordField).type("12345678");
    cy.get(loginLocator.loginBtn).click();
    cy.get(dashboardLocator.openAccountBtn).click();
    cy.get(openAccountLocator.openNewAccountTitle)
      .should("exist")
      .and("have.text", openAccountLocator.openNewAccountTitleText);
    cy.get(openAccountLocator.accountTypeDropdownField).select(1);
    cy.get(openAccountLocator.accountDropdownField).select(0);
    cy.get(openAccountLocator.openNewAccountBtn).click();
    cy.get(openAccountLocator.accountOpeningSuccessMsg)
      .should("exist")
      .and("have.text", openAccountLocator.accountOpeningSuccessMsgText);
  });
});

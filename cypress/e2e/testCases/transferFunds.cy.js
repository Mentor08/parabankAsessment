import { dashboardLocator } from "../pageObjectModel/dashboardPage";
import { loginLocator } from "../pageObjectModel/loginPage";
import { transferFundLocator } from "../pageObjectModel/transferFundPage";

describe("Transfer funds functionality", () => {
  it("verify that user can transfer fund successfully", () => {
    cy.visit("/index.htm");
    cy.get(loginLocator.usernameField).type("eqGj0F");
    cy.get(loginLocator.passwordField).type("12345678");
    cy.get(loginLocator.loginBtn).click();
    cy.get(dashboardLocator.transferBtn).click();
    cy.get(transferFundLocator.transferFundTitle).should("exist");
    cy.get(transferFundLocator.amountField).type(20);
    cy.get(transferFundLocator.fromAccountField).select(0);
    cy.get(transferFundLocator.toAccountField).select(0);
    cy.get(transferFundLocator.transferBtn).click();
    cy.get(transferFundLocator.transferSuccessMsg)
      .should("exist")
      .and("have.text", transferFundLocator.transferSuccessMsgText);
  });
});

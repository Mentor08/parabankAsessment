import { dashboardLocator } from "../pageObjectModel/dashboardPage";
import { loginLocator } from "../pageObjectModel/loginPage";
import { requestLoanLocator } from "../pageObjectModel/requestLoanPage";

describe("Request loan functionality", () => {
  it("verify that user can request for loan successfully", () => {
    cy.visit("/index.htm");
    cy.get(loginLocator.usernameField).type("eqGj0F");
    cy.get(loginLocator.passwordField).type("12345678");
    cy.get(loginLocator.loginBtn).click();
    cy.get(dashboardLocator.requestLoanBtn).click();
    cy.get(requestLoanLocator.loanAmountField).type(200);
    cy.get(requestLoanLocator.downPaymentField).type(20);
    cy.get(requestLoanLocator.fromAccountField).select(0);
    cy.get(requestLoanLocator.applyNowBtn).click();
    cy.get(requestLoanLocator.loanApprovalSuccessMsg)
      .should("exist")
      .and("have.text", requestLoanLocator.loanApprovalSuccessMsgText);
  });
});

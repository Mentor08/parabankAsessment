import { registerLocator } from "../pageObjectModel/registerPage";
describe("Registration Test", () => {
  function generateRandomText(length) {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomText = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomText += charset[randomIndex];
    }
    return randomText;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  it("verify that user can register successfully", () => {
    cy.visit("/index.htm");
    cy.get(registerLocator.registerBtn).click();
    cy.get(registerLocator.firstNameField).type(generateRandomText(6));
    cy.get(registerLocator.lastNameField).type(generateRandomText(6));
    cy.get(registerLocator.addressField).type(generateRandomText(10));
    cy.get(registerLocator.cityField).type(generateRandomText(6));
    cy.get(registerLocator.stateField).type(generateRandomText(6));
    cy.get(registerLocator.zipCodeField).type(getRandomInt(10000, 10000000));
    cy.get(registerLocator.phoneNumberField).type(
      "0803" + getRandomInt(100000, 10000000)
    );
    cy.get(registerLocator.ssnField).type(getRandomInt(1000, 1000000));
    cy.get(registerLocator.regUsernameField).type(generateRandomText(6));
    cy.get(registerLocator.regPasswordField).type(12345678);
    cy.get(registerLocator.regConfirmPasswordField).type(12345678);
    cy.get(registerLocator.regAccountBtn).click();
    cy.wait(1000);
    cy.get(registerLocator.registrationSuccessMsg)
      .should("exist")
      .and("have.text", registerLocator.registrationSuccessMsgText);
  });
});

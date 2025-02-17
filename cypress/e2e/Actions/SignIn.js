import {SignInLocators} from "../Elements/SignInLocators";

class SignIn {
    openUrl() {
        cy.visit(Cypress.env("baseUrl"));
        cy.url().should("include", "/login");

    }

    enterEmail(email) {
        cy.get(SignInLocators.webLocators.email).type(email)
    }

    enterPassword(password) {
        cy.get(SignInLocators.webLocators.password).type(password)
    }

    clickLoginButton() {
        cy.get(SignInLocators.webLocators.loginButton).click();

    }

    assertAdminUserName() {
        cy.get(SignInLocators.webLocators.adminPanel).should("be.visible")
    }

    assertErrorMessageForInvalidUsers() {
        cy.get(SignInLocators.webLocators.errorMessageInvalidUsers).should("be.visible");
    }

    assertErrorMessageForInvalidCreds() {
        cy.get(SignInLocators.webLocators.errorMessageInvalidCredentials).should("be.visible")

    }

    logOut() {
        cy.get(SignInLocators.webLocators.adminPanel).click();
        cy.get(SignInLocators.webLocators.logOut).contains("Log out").click();
    }

}

export default SignIn;
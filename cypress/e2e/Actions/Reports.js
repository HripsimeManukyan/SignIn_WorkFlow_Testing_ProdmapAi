import {ReportsLocators} from "../Elements/ReportsLocators";

class ReportsSection {
    navigateToReports() {
        cy.get(ReportsLocators.webLocators.sidebar).contains("Reports").click()
        cy.get(ReportsLocators.webLocators.headerTitle).should("be.visible")

    }
    generateReports() {
        cy.get(ReportsLocators.webLocators.generateButton).contains("Generate").click();
        cy.get(ReportsLocators.webLocators.byTeam).click()
        cy.get(ReportsLocators.webLocators.modal).should("be.visible")
        cy.get(ReportsLocators.webLocators.inputTypeTitle).type("Automation Test Reports")
        cy.get(ReportsLocators.webLocators.inputOwner).should("be.visible")
            .and("contain", "Owner")
        cy.get(ReportsLocators.webLocators.TeamsClickIcon).click()
        cy.get(ReportsLocators.webLocators.popUpList).should("be.visible")
        cy.get(ReportsLocators.webLocators.popUpList).eq(0).click();
        cy.get(ReportsLocators.webLocators.popUpList).eq(1).click();
        cy.get(ReportsLocators.webLocators.inputTeams, {timeout:5000}).should("not.be.empty")
        cy.get(ReportsLocators.webLocators.buttonGenerateConfirm).click();
        cy.get(ReportsLocators.webLocators.reportTitle).contains("Automation Test Reports")


    }




}

export default ReportsSection;
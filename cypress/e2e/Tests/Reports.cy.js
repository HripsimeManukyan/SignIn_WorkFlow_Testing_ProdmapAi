import SignIn from '../Actions/SignIn'
import ReportsSection from "../Actions/Reports";
import credentials from "../../fixtures/credentials.json";


describe('SignIn workflow', () => {
    const loginPage = new SignIn()
    const reports = new ReportsSection()
    beforeEach(() => {
        loginPage.openUrl()
        loginPage.enterEmail(credentials.validUser.email)
        loginPage.enterPassword(credentials.validUser.password)
        loginPage.clickLoginButton()
    });


    it("Should generate Reports by Team successfully", () => {
        reports.navigateToReports()
        reports.generateReports()

    });

})

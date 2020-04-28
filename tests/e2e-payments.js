import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import PaymentsPage from '../page-objects/pages/PaymentsPage'

describe('E2E Tests - Payments', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('Should make payment', () => {
        PaymentsPage.clickPayBillsTab()
        PaymentsPage.selectPayeeByAttribute('value', 'apple')
        PaymentsPage.selectAccountType('Loan')
        PaymentsPage.enterPaymentDetails('100', '2020-04-30', 'Test refactored')
        PaymentsPage.submitPayment()
        const resultsMsg = PaymentsPage.message
        expect(resultsMsg).toHaveText('The payment was successfully submitted.')
    })
});
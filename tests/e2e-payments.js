import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Payments', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('Should make payment', () => {
        const payBillsTab = $('#pay_bills_tab')
        payBillsTab.waitForExist()
        payBillsTab.click()
        const selectPayee = $('#sp_payee')
        selectPayee.waitForExist()
        selectPayee.selectByAttribute('value', 'apple')
        const selectAccount = $('#sp_account')
        selectAccount.waitForExist()
        selectAccount.selectByVisibleText('Loan')
        const amount = $('#sp_amount')
        amount.setValue('100')
        const date = $('#sp_date')
        date.setValue('2020-04-30')
        const description = $('#sp_description')
        description.setValue('Test')
        const submitPay = $('#pay_saved_payees')
        submitPay.click()
        const resultsMsg = $('#alert_content')
        expect(resultsMsg).toHaveText('The payment was successfully submitted.')
    })
});
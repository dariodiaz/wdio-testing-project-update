import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Currency Exchange', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username', 'password')
        LoginPage.submitForm()
        Navbar.insideNavbarIsVisible()
    })

    it('Should make currency exchange', () => {
        const payBillsTab = $('#pay_bills_tab')
        payBillsTab.waitForExist()
        payBillsTab.click()
        const purchaseCurrencyTab = $('#tabs > ul > li:nth-child(3) > a')
        purchaseCurrencyTab.waitForExist()
        purchaseCurrencyTab.click()
        const currencySelect = $('#pc_currency')
        currencySelect.waitForExist()
        currencySelect.selectByAttribute('value', 'GBP')
        const amount = $('#pc_amount')
        amount.setValue('500')
        const usdOption = $('#pc_inDollars_true')
        usdOption.click()
        const submitButton = $('#purchase_cash')
        submitButton.click()
        const resultsMsg = $('#alert_content')
        expect(resultsMsg).toHaveText('Foreign currency cash was successfully purchased.')
    })
});
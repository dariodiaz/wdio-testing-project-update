import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import InsideNavbar from '../page-objects/components/InsideNavbar'

import CurrencyExchangePage from '../page-objects/pages/CurrencyExchangePage'

describe('E2E Tests - Currency Exchange', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('Should make currency exchange', () => {
        InsideNavbar.clickPayBillsTab()
        CurrencyExchangePage.clickPurchaseCurrencyTab()
        CurrencyExchangePage.selectCurrencyByAttribute('value', 'GBP')
        CurrencyExchangePage.enterExchangeOptions('500')
        CurrencyExchangePage.submitExchange()
        const resultsMsg = CurrencyExchangePage.message
        expect(resultsMsg).toHaveText('Foreign currency cash was successfully purchased.')
    })
});
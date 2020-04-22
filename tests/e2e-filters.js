import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Transactions Filter', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('Transaction filter should work', () => {
        const accountTab = $('#account_activity_tab')
        accountTab.click()
        const findTransactionsTab = $('#tabs > ul > li:nth-child(2) > a')
        findTransactionsTab.waitForExist()
        findTransactionsTab.click()
        const descriptionField = $('#aa_description')
        descriptionField.waitForExist()
        descriptionField.setValue('TRANSFER')
        const findButton = $('button[type="submit"]')
        findButton.click()
        $('#filtered_transactions_for_account').waitForExist()
        // const resultsMsg = $('.well')
        // expect(resultsMsg).toHaveText('No results.')
        expect($('#filtered_transactions_for_account > table')).toBeVisible()
        expect($('#filtered_transactions_for_account > table > tbody > tr:nth-child(1) > td:nth-child(2)'))
        .toHaveText('ONLINE TRANSFER REF #UKKSDRQG6L')
    })
});
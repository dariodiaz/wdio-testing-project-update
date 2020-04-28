import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import InsideNavbar from '../page-objects/components/InsideNavbar'
import FiltersPage from '../page-objects/pages/FiltersPage'

describe('E2E Tests - Transactions Filter', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('Transaction filter should work', () => {
        InsideNavbar.clickAccountActivityTab()
        InsideNavbar.clickFiltersLink()
        FiltersPage.fillDescription('Test')
        FiltersPage.submitFilter()
        FiltersPage.isResultsTableVisible()
        const message = FiltersPage.message
        expect(message).toHaveText('No results.')
    })
});
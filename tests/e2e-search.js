import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Search', () => {
    it('Should load homepage', () => {
        App.openHomepage()
    })

    it('Should submit searchbox', () => {
        Navbar.search('bank')
        const resultsTitle = $('h2')
        resultsTitle.waitForExist()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/search.html?searchTerm=bank')
        expect(resultsTitle).toHaveText('Search Results:')
    })
});
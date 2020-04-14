describe('E2E Tests - Search', () => {
    it('Should load homepage', () => {
        const searchTerm = $('#searchTerm')
        browser.url('http://zero.webappsecurity.com')
        searchTerm.waitForExist()
    })

    it('Should submit searchbox', () => {
        $('#searchTerm').setValue('bank')
        browser.keys('Enter')
        const resultsTitle = $('h2')
        resultsTitle.waitForExist()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/search.html?searchTerm=bank')
        expect(resultsTitle).toHaveText('Search Results:')
    })
});
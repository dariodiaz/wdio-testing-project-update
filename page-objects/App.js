class App {
    openHomepage() {
        browser.url('http://zero.webappsecurity.com/')
    }

    logout() {
        browser.url('http://zero.webappsecurity.com/logout.html')
    }
}

export default new App()
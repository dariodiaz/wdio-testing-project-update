import LoginPage from '../page-objects/pages/LoginPage'

describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        browser.url('http://zero.webappsecurity.com/')
        const loginButton = $('#signin_button')
        loginButton.waitForExist()
        loginButton.click()
        LoginPage.formIsVisible()
        LoginPage.fillForm('usernamexxx', 'passwordxxx')
        LoginPage.submitForm()
        const error = $('.alert-error')
        expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {
        browser.url('http://zero.webappsecurity.com/')
        const loginButton = $('#signin_button')
        loginButton.waitForExist()
        loginButton.click()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username', 'password')
        LoginPage.submitForm()
        $('.nav-tabs').waitForExist()
    })

    it('Should logout from app', () => {
        const logoutDropDown = $('.icon-user')
        const logoutButton = $('#logout_link')
        const submitLogin = $('input[type="submit"]')
        logoutDropDown.waitForExist()
        logoutDropDown.click()
        logoutButton.click()
        $('#pages-nav').waitForExist()
    });
});
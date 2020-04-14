describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        browser.url('http://zero.webappsecurity.com/')
        const loginButton = $('#signin_button')
        loginButton.waitForExist()
        loginButton.click()
        const formLogin = $('#login_form')
        formLogin.waitForExist()
        const loginUserField = $('#user_login')
        loginUserField.setValue('invalid')
        const loginPwdField = $('#user_password')
        loginPwdField.setValue('invalid')
        const submitLogin = $('input[type="submit"]')
        submitLogin.click()
        const error = $('.alert-error')
        expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {
        browser.url('http://zero.webappsecurity.com/')
        const loginButton = $('#signin_button')
        loginButton.waitForExist()
        loginButton.click()
        const formLogin = $('#login_form')
        formLogin.waitForExist()
        const loginUserField = $('#user_login')
        loginUserField.setValue('username')
        const loginPwdField = $('#user_password')
        loginPwdField.setValue('password')
        const submitLogin = $('input[type="submit"]')
        submitLogin.click()
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
describe('E2E Tests - Help', () => {
    it('Should log into application', () => {
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

    it('Should load help content', () => {
        $('.icon-cog').click()
        $('#help_link').waitForExist()
        $('#help_link').click()
        const title = $('.span8 > h3')
        expect(title).toHaveText('How do I log into my account?')
        // search by partial text
        $('*=transfer funds').click()
        expect(title).toHaveText('How do I transfer funds?')
        $('*=pay bills').click()
        expect(title).toHaveText('How do I pay bills?')
    });
});
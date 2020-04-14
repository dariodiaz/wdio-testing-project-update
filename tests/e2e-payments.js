describe('E2E Tests - Payments', () => {
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

    it('Should make payment', () => {
        const payBillsTab = $('#pay_bills_tab')
        payBillsTab.waitForExist()
        payBillsTab.click()
        const selectPayee = $('#sp_payee')
        selectPayee.waitForExist()
        selectPayee.selectByAttribute('value', 'apple')
        const selectAccount = $('#sp_account')
        selectAccount.waitForExist()
        selectAccount.selectByVisibleText('Loan')
        const amount = $('#sp_amount')
        amount.setValue('100')
        const date = $('#sp_date')
        date.setValue('2020-04-30')
        const description = $('#sp_description')
        description.setValue('Test')
        const submitPay = $('#pay_saved_payees')
        submitPay.click()
        const resultsMsg = $('#alert_content')
        expect(resultsMsg).toHaveText('The payment was successfully submitted.')
    })
});
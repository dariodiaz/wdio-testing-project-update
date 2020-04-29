import Base from '../Base'

class PaymentsPage extends Base {
    get selectPayee() {
        return $('#sp_payee')
    }

    get selectAccount() {
        return $('#sp_account')
    }

    get amount() {
        return $('#sp_amount')
    }

    get date() {
        return $('#sp_date')
    }

    get description() {
        return $('#sp_description')
    }

    get submitPayButton() {
        return $('#pay_saved_payees')
    }

    get message() {
        return $('#alert_content')
    }

    selectAccountType(type) {
        this.selectAccount.waitForExist()
        this.selectAccount.selectByVisibleText(type)
    }

    selectPayeeByAttribute(attribute, value) {
        this.selectPayee.waitForExist()
        this.selectPayee.selectByAttribute(attribute, value)
    }

    enterPaymentDetails() {
        this.amount.setValue('100')
        this.date.setValue('2020-04-30')
        this.description.setValue('Test')
    }

    submitPayment() {
        this.submitPayButton.click()
    }

}

export default new PaymentsPage()
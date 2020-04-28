import Base from '../Base'

class CurrencyExchangePage extends Base {
    get payBillsTab() {
        return $('#pay_bills_tab')
    }

    get purchaseCurrencyTab() {
        return $('#tabs > ul > li:nth-child(3) > a')
    }

    get currencySelect() {
        return $('#pc_currency')
    }

    get amount() {
        return $('#pc_amount')
    }

    get usdOption() {
        return $('#pc_inDollars_true')
    }

    get submitButton() {
        return $('#purchase_cash')
    }

    get message() {
        return $('#alert_content')
    }

    clickPayBillsTab() {
        this.payBillsTab.waitForExist()
        this.payBillsTab.click()
    }

    clickPurchaseCurrencyTab() {
        this.purchaseCurrencyTab.waitForExist()
        this.purchaseCurrencyTab.click()
    }

    selectCurrencyByAttribute(attribute, value) {
        this.currencySelect.waitForExist()
        this.currencySelect.selectByAttribute(attribute, value)
    }

    enterExchangeOptions(value) {
        this.amount.setValue(value)
        this.usdOption.click()
    }

    submitExchange() {
        this.submitButton.click()
    }

}

export default new CurrencyExchangePage()
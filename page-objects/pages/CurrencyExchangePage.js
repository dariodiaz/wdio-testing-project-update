import Base from '../Base'

class CurrencyExchangePage extends Base {
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
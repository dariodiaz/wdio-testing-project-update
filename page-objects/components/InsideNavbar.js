import Base from '../Base'

class InsideNavbar extends Base {
    get accountActivityTab() {
        return $('#account_activity_tab')
    }

    get filtersLink() {
        return $('#tabs > ul > li:nth-child(2) > a')
    }

    get payBillsTab() {
        return $('#pay_bills_tab')
    }

    clickAccountActivityTab() {
        this.accountActivityTab.waitForExist()
        this.accountActivityTab.click()
    }

    clickFiltersLink() {
        this.filtersLink.waitForExist()
        this.filtersLink.click()
    }

    clickPayBillsTab() {
        this.payBillsTab.waitForExist()
        this.payBillsTab.click()
    }
}

export default new InsideNavbar()
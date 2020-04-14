import { short } from '../lib/timeouts'

describe('Browser Actions', () => {
    it('Inputs', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        // const input = $('#developer-name')
        // input.waitForExist()
        // input.setValue('Dario')
        // browser.pause(short)
        // // input.clearValue()
        // // browser.pause(short)
        // input.addValue(' Diaz')
        // browser.pause(short)
    })

    // it('Click', () => {
    //     const buttonPopulate = $('#populate')
    //     buttonPopulate.waitForExist()
    //     buttonPopulate.click()
    //     // buttonPopulate.doubleClick()
    //     browser.pause(short)
    // })

    it('Checkbox & Radio Button', () => {
        const radio = $('#linux')
        radio.waitForExist()
        radio.click()
        browser.pause(short)

        const checkbox = $('#remote-testing')
        checkbox.waitForExist()
        checkbox.click()
        browser.pause(short)
    })

    it('Select Box', () => {
        const selectBox = $('#preferred-interface')
        selectBox.waitForExist()
        selectBox.selectByVisibleText('JavaScript API')
        browser.pause(short)
    });
})
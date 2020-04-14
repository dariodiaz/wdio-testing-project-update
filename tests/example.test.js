import { short, medium, long} from '../lib/timeouts'
import { mobile, tablet, desktop} from '../lib/devices'

describe('First Steps with WebdriverIO', () => {
    it('Load Example Website', () => {
        browser.url('http://example.com')
        browser.pause(short)
        expect(browser).toHaveUrl('http://example.com/')
        expect(browser).toHaveTitle('Example Domain')
    })
    // it('Load WebdriverIO Website', () => {
    //     browser.url('https://webdriver.io')
    //     browser.pause(3000)
    // });
    it('H1 should be visible', () => {
        // Get selector and save it to variable
        // Do assertion
        const h1 = $('h1')
        h1.waitForExist()
        expect(h1).toBeVisible()
    })

    it('P should be visible', () => {
        const p = $('p')
        p.waitForExist()
        expect(p).toBeVisible()
    })

    it('Check Link Value', () => {
        const link = $('a')
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })

    it('Get Element Text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('Example Domain')
    })

    it('Assert Attribute', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type','submit')
    });

    it('Assert Value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })

    it('Save Screenshot', () => {
        browser.saveScreenshot('your-name.png')
    })

    it('Change Browser Viewport', () => {
        browser.setWindowSize(768,480)
        browser.pause(medium)
    })

    it('Set Mobile View', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    });

    it('Set Tablet View', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(short)
    });

    it('Set Desktop View', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(short)
    });

});


import App from '../page-objects/App'

describe('E2E - Feedback', () => {
    it('Should load feedback form', () => {
        // browser.url('http://zero.webappsecurity.com/')
        App.openHomepage()
        const feedbackButton = $('#feedback')
        feedbackButton.waitForExist()
        feedbackButton.click()
        const feedbackForm = $('form')
        feedbackForm.waitForExist()
    })

    it('Should submit feedback form', () => {
        const name = $('#name')
        name.setValue('Dario')
        const email = $('#email')
        email.setValue('test@test.com')
        const subject = $('#subject')
        subject.setValue('Example Subject')
        const comment = $('#comment')
        comment.setValue('This is a sample feedback comment')
        const submitFeedback = $('input[type="submit"]')
        submitFeedback.click()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
});
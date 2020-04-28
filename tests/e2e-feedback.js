import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import FeedbackPage from '../page-objects/pages/FeedbackPage'

describe('E2E - Feedback', () => {
    it('Should load feedback form', () => {
        App.openFeedbackPage()
        FeedbackPage.formIsVisible()
    })

    it('Should submit feedback form', () => {
        FeedbackPage.fillForm('Dario', 'test@test.com', 'Test wdio', 'This is just a test')
        FeedbackPage.submitForm()
        expect(browser).toHaveUrl(
            'http://zero.webappsecurity.com/sendFeedback.html')
    })
});
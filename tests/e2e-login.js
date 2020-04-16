import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        App.openHomepage()
        Navbar.clickSignIn()
        LoginPage.formIsVisible()
        LoginPage.fillForm('usernamexxx', 'passwordxxx')
        LoginPage.submitForm()
        const message = LoginPage.error
        expect(message).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {
        App.openHomepage()
        Navbar.clickSignIn()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username', 'password')
        LoginPage.submitForm()
        Navbar.insideNavbarIsVisible()
    })

    it('Should logout from app', () => {
        App.logout()
        Navbar.signInButtonIsVisible()
    });
});
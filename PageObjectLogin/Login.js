exports.LoginPage=class LoginPage{

    constructor (page) { //holds attributes of the login page
        this.page = page;
        this.usernameInputbox= '#user-name';
        this.passwordInputbox= '#password';
        this.loginButton= '#login-button';
    }
    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/')
      
    }

    async login(username, password){
        await this.page.locator(this.usernameInputbox).fill('username');
        await this.page.locator(this.passwordInputbox).fill('password');
        await this.page.locator(this.loginButton).click();   
    }
}
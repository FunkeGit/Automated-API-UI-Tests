import {test, expect} from '@playwright/test'
import { LoginPage} from '../PageObjectLogin/Login'

test('Successful Login', async({page})=>{

    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('standard_user','secret_sauce');
    
})

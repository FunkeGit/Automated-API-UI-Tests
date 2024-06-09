#### **OBJECTIVE**
To provide instructions on how to run the API and UI automated test locally and on CI

#### **Automation Framework**
- __[Playwright](https://playwright.dev/docs/intro/)__ with `js`

#### **Playwright Installation**
+ Install __[node.js](https://nodejs.org/en)__
+ Install  __[VS Code Editor](https://code.visualstudio.com/)__
+ Open the work folder in VS Code Editor
+ Run the install command on the terminal

```
npm init playwright@latest
```
+ Select the following to get started
  * Choose between TypeScript or JavaScript
  * Name of your test folder (tests is the default)
  * Add Github actions to run tests on CI
  * Install Playwright browsers (default is true)


#### **Files Installed With Browsers**
```
playwright.config.js
package.json
package-lock.json
tests/
tests-examples/
```
The __[playwright.config.js](https://playwright.dev/docs/test-configuration)__ is where you can modify browsers, add reporters, and configure playwright.

Test cases are developed and designed in the { tests } folder


#### **Running Tests Locally**
+ Run all tests in the folder in headless mode meaning no browser will open while running the test. Test results and logs will be displayed on the terminal
```
npx playwright test
```
+ Run specific test spec.js file in the `test` folder. Use the command
```
npx playwright test Login.spec.js
```
+ Run all tests in the `test` folder using a specific browser in a headed mode meaning the selected browser will be displayed. Use the command
```
npx playwright test --project='chromium' --headed
```

#### **HTML Test Reports**
An HTML report is generated on every test run which filters reports by browser, passed, failed, skipped, and flaky tests. By default, the HTML report is opened when the test fails
```
npx playwright show report
```

#### **Run Test On CI GitHub Actions**
When installing Playwright, an option to add __[GitHub Actions](https://docs.github.com/en/actions) workflow is provided. This creates a ```playwright.yml``` file in the ```.github\workflow``` folder. Tests will run on pull or push requests on the branch main/master. The following steps should be implemented to test on CI:

+ Use ```git init``` to __[initialize](https://github.com/git-guides/git-init), __[add](https://github.com/git-guides/git-add), __[commit](https://github.com/git-guides/git-commit), and __[push](https://github.com/git-guides/git-push) code to GitHub
+ Click on the **Actions** tab to view the .workflow of passed and failed test 
+ Click on workflows run to give a breakdown of all actions performed by GitHub
+ Click on the **playwright-report** in the Artifact to download the report in a zip file


  

/// <reference types="cypress" />




import Login from '../pageObjects/login'
describe("QA Automation test task ",function() {
    const login = new Login()
   it(" Fill in the “Username” and “Password” input fields and click the “LogIn” button",function () {
   login.open()
   cy.title().should('eq','Login')  
   cy.location('protocol').should('eq','https:') //check that we are on the right page before doing something (click, enter)
   login.username().type('Admin').clear()
   login.password().type('Admin123')
   login.button().should('be.visible').click();
})
it("Create a test-case that will fail because of unsuccessful login ",function () {
   login.username().type('').clear()
   login.password().type('Admin123')
   login.button().should('be.visible').click();
   cy.get('#all > div > form > div.form-group.has-error > span').should('be.visible')
})

it("Verify that all the error messages appear number one",function () {
    //leave the login field blank
   login.password().type('Admin123')
   login.button().should('be.visible').click();
   cy.contains('Please enter username.').should('be.visible')
})
it("Verify that all the error messages appear number two",function () {
   login.username().type('123').clear()
   //leave the password field blank
   login.button().should('be.visible').click();
   cy.contains('Please enter your password.').should('be.visible')
})
it("Verify that all the error messages appear number three",function () {
   //leave the login field blank
   //leave the password field blank
   login.button().should('be.visible').click();
   cy.contains('Please enter your password.').should('be.visible')
   cy.contains('Please enter username.').should('be.visible')
})
it("Use an assertion library and verify that all the elements are present on the page ",function () {
   login.img().should('be.visible')  //element 1
   login.text().should('be.visible')  //element 2
   login.username().should('be.visible')  //element 3
   login.password().should('be.visible')  //element 4
   login.button().should('be.visible') //element 5
})
})
//npx cypress open
//npx cypress run --reporter mochawesome
//I'm sorry I couldn't do it(Optional - wrap the tests into a docker container.)
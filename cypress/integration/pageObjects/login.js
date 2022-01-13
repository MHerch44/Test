/// <reference types="cypress" />
class login{

    username(){
       return  cy.get('input[type="text"]')
    }
    password(){
      return cy.get('input[type="password"]')
    }
    button(){
     return cy.get('input[type="submit"]')
    }
    open(){
    return  cy.visit("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php") 
    }
    img(){
      return  cy.get('#logomini')
    }
    text(){
      return cy.get('#all > div > center > h1')
    }
  }
    export default login
/// <reference types="Cypress" />


describe("Login page of Stop-n-Shop", function() {
    it("Visit the Login page and Check title of page", function() {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.visit("http://localhost:3000");
      cy.title().should("include", "React App");
    });
    it('check login button', function(){
      cy.get(':nth-child(4) > .MuiButtonBase-root-86').should("contain", "Login").click()
    })
  })

describe("login using auth0", function(){
    it('visit the auth0 authentication', function(){
      cy.visit("https://huntersexton.auth0.com/login?client=gSzYBuobL5LRs69Q6ZfNN9b2gxdyMMtY&scope=openid%20profile%20email&redirect_uri=http://localhost:3000/auth/callback")
      cy.title().should('include', "Sign")
    })
    it('log in with google', function(){
      cy.get('[data-provider="google-oauth2"] > .auth0-lock-social-button-text').click()
    })
})

describe("return home", function() {
  it("Visit the Login page and Check title of page", function() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.visit("http://localhost:3000");
    cy.title().should("include", "React App");
  });

})

describe('check scrolls', function(){
  it('view background splashes', function(){
    cy.get('.next').click()
    cy.get('.next').click()
    cy.get('.next').click()
  })

  // it('view cart', function (){
  //   cy.get('')
  // }
})



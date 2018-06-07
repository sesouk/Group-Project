/// <reference types="Cypress" />

describe('Find shop button', function() {
  it('loads first page', function() {
    cy.visit('http://localhost:3000')
  })
  it('check shop button', function(){
    cy.get(':nth-child(2) > .MuiButtonBase-root-86').should("contain", "Shop").click()
  })
  it('check home button', function(){
    cy.get(':nth-child(1) > .MuiTypography-title-46').should("contain", "Stop N Shop").click()
  })
})
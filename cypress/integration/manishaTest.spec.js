it('is doing something very important', function (done) {
  cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('something about the error')
      done()
      return false
      cy.visit("http://localhost:3000/shop");
  })
  
  })


describe("Testing the Shop items", function() {
  it("Visit the shop page and it should show items and Category buttons", function() {
    cy.visit("http://localhost:3000/shop");
    cy.get('[value="T-shirts"] > .MuiButton-label-65').should("contain", "T-shirts");
    cy.get('[value="Jeans"] > .MuiButton-label-65').should("contain","Jeans");
    cy.get('[value="Shoes"] > .MuiButton-label-65').should("contain","Shoes");
    cy.get('[value="Watch"] > .MuiButton-label-65').should("contain","Watch");
  });
})


describe("Add item to cart", function() {
  it("add T shirt to the cart", function() {
cy.get(':nth-child(2) > .item-contain > img').click()
cy.get('.close').click()
cy.wait(200)

});


describe("Add item to cart", function() {
  it("add Jean the cart", function() {
cy.get(':nth-child(3) > .item-contain > img').click()
cy.get('.close').click()
cy.wait(200)

});


})
})
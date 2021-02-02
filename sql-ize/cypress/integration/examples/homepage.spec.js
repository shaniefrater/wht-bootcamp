describe('Restaurant tests', () => {
    it ('finds the restaurant website', () => {
      cy.visit('http://localhost:3000');
    })

    it('opens the Add Restaurant page', () => {
        cy.visit('http://localhost:3000');

        // search for the DOM element by content 
        // and then call 'click'
        cy.contains('ADD NEW').click();
      })
  })
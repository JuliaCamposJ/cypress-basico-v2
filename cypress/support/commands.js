Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Babalu')
    cy.get('#lastName').type('Demelancia')
    cy.get('#email').type('babaludemelancia@gmail.com')
    cy.get('#open-text-area').type('Testando')         
    cy.get('button[type="submit"]').click()
})
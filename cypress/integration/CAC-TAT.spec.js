/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
      })
    it('verifica o título da aplicação', function() {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {

        cy.get('input[id="firstName"]')
          .should('be.visible')
          .type('Babalu')
          .should('have.value', 'Babalu')

        cy.get('input[id="lastName"]')
          .should('be.visible')
          .type('Demelancia')
          .should('have.value', 'Demelancia')

        cy.get('input[id="email"]')
          .should('be.visible')
          .type('babaludemelancia@gmail.com')
          .should('have.value', 'babaludemelancia@gmail.com')

        cy.get('textarea[id="open-text-area"]')
          .should('be.visible')
          .type('Me dê um babalu de Melancia')
          .should('have.value', 'Me dê um babalu de Melancia')
          
        cy.get('button[type="submit"]')
          .should('be.visible')
          .click()
          
        cy.get('body > span.success > strong')
        .should('be.visible')
        .and('have.text', 'Mensagem enviada com sucesso.')
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {

        cy.get('#firstName')
          .should('be.visible')
          .type('Babalu')
          .should('have.value', 'Babalu')

        cy.get('#lastName')
          .should('be.visible')
          .type('Demelancia')
          .should('have.value', 'Demelancia')

        cy.get('input[id="email"]')
          .should('be.visible')
          .type('babaludemelancia@gmail.com')
          .should('have.value', 'babaludemelancia@gmail.com')

        cy.get('textarea[id="open-text-area"]')
          .should('be.visible')
          .type('Me dê um babalu de Melancia')
          .should('have.value', 'Me dê um babalu de Melancia')
          
        cy.get('button[type="submit"]')
          .should('be.visible')
          .click()
          
        cy.get('.success')
        .should('be.visible')
        cy.contains('Mensagem enviada com sucesso.')

    })
    it('preenche os campos obrigatórios e envia o formulário', function() {
     
      const longText = 'Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul.'
      cy.get('#firstName').type('Babalu')
      cy.get('#lastName').type('Demelancia')
      cy.get('#email').type('babaludemelancia@gmail.com')
      cy.get('#open-text-area').type(longText, { delay: 0 }) 
      cy.get('button[type="submit"]').click()
      cy.get('.success').should('be.visible')

    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
      
      cy.get('#firstName').type('Babalu')
      cy.get('#lastName').type('Demelancia')
      cy.get('#email').type('babaludemelancia=gmail.com')
      cy.get('#open-text-area').type('Testando')         
      cy.get('button[type="submit"]').click()

      cy.get('.error').should('be.visible')
      cy.contains('Valide os campos obrigetórios!')

    })
    it('quando preencher o telefone com algo não númerico o campo ficará em branco', function() {
      
      cy.get('#phone').type('babaludemel').should('not.have.text', 'babaludemel')
     
    })
    it('exibe mensagem de erro quando o telefone se torna obrigetório mas não é preenchido antes do envio do formulário', function() {
      cy.get('#firstName').type('Babalu')
      cy.get('#lastName').type('Demelancia')
      cy.get('#email').type('babaludemelancia@gmail.com')
      cy.get('#phone-checkbox').click()
      cy.get('#open-text-area').type('Testando')         
      cy.get('button[type="submit"]').click()

      cy.get('.error').should('be.visible')
      cy.contains('Valide os campos obrigetórios!')

    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
      cy.get('#firstName').type('Babalu').should('have.value', 'Babalu').clear().should('have.value', '')
      cy.get('#lastName').type('Demelancia').should('have.value', 'Demelancia').clear().should('have.value', '')
      cy.get('#email').type('babaludemelancia@gmail.com').should('have.value', 'babaludemelancia@gmail.com').clear().should('have.value', '')
      cy.get('#phone').type('1145454545').should('have.value', '1145454545').clear().should('have.value', '')
    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigetórios', function() {
           
      cy.get('button[type="submit"]').click()
      cy.get('.error').should('be.visible')
      cy.contains('Valide os campos obrigetórios!')

    })
    it('envia o formuário com sucesso usando um comando customizado', function() {
      cy.fillMandatoryFieldsAndSubmit()

      cy.get('.success').should('be.visible')
    })
    it('preenche os campos obrigetórios e envia o formulário', function() {
     
      const longText = 'Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul,Amarelo, vermelho, azul.'
      cy.get('#firstName').type('Babalu')
      cy.get('#lastName').type('Demelancia')
      cy.get('#email').type('babaludemelancia@gmail.com')
      cy.get('#open-text-area').type(longText, { delay: 0 })         
      cy.contains('button', 'Enviar').click()
      cy.get('.success').should('be.visible')

    })
    it('seleciona um produto (YouTube) por seu texto', function() {

       cy.get('#product').select('YouTube')
       .should('have.value', 'youtube')

    })
    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
      
      cy.get('#product').select('mentoria')
      .should('have.value', 'mentoria')

   })
   it('seleciona um produto (Blog) por seu valor indice', function() {
      
    cy.get('#product').select(1)
    .should('have.value', 'blog')

 })
   it('marca o tipo de atendimento "Feedback"', function() {
      
   cy.get('input[type="radio"][value="feedback"]').check()
    .should('have.value', 'feedback')

})
    it('marca cada tipo de atendimento', function() {   
      cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio)  {
          cy.wrap($radio).check()
          cy.wrap($radio).should('be.checked')
     })
})
    it('marca ambos checkboxes, depois desmarca o último', function() {   
       cy.get('input[type="checkbox"]')
        .should('have.length', 2)
        .each(function($checkbox)  {
          cy.wrap($checkbox).check()
          cy.wrap($checkbox).should('be.checked')
          cy.get('input[type="checkbox"]').last().uncheck()
          .should('not.be.checked')
     })
})
    it('marca ambos checkboxes, depois desmarca o último', function() {   
      cy.get('input[type="checkbox"]').check()
         .should('be.checked').last().uncheck()
         .should('not.be.checked')
})
    it('exibe mensagem de erro quando o telefone se torna obrigetório mas não é preenchido antes do envio do formulário', function() {
      cy.get('#firstName').type('Babalu')
      cy.get('#lastName').type('Demelancia')
      cy.get('#email').type('babaludemelancia@gmail.com')
      cy.get('#phone-checkbox').check()
      cy.get('#open-text-area').type('Testando')         
      cy.get('button[type="submit"]').click()

      cy.get('.error').should('be.visible')
      cy.contains('Valide os campos obrigetórios!')
})
   it('seleciona um arquivo da pasta fixtures', function() {
      cy.get('input[type="file"]#file-upload')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json')
        .should(function($input) {
          expect($input[0].files[0].name).to.equal('example.json')
        })
})
   it('seleciona um arquivo simulando um drag-and-drop', function() {
      cy.get('input[type="file"]#file-upload')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json',{ action: 'drag-drop' })
        .should(function($input) {
          expect($input[0].files[0].name).to.equal('example.json')
        })
})

   it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
      cy.fixture('example.json').as('sampleFile')
      cy.get('input[type="file"]#file-upload')
        .selectFile('@sampleFile')
})
    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
      cy.get('#privacy a').should('have.attr', 'target', '_blank')
    
})
    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
      cy.get('#privacy a').should('have.attr', 'target', '_blank')
        .invoke('removeAttr', 'target')
        .click()
      cy.contains('Talking About Testing').should('be.visible')  
})
})

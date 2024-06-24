/// <reference types="cypress" />

describe('Testes para o formulario', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve incluir um novo contato', () => {
        cy.get('input[type="text"]').type('gabriel soares')
        cy.get('input[type="email"]').type('gabrielluiz299@gmail.com')
        cy.get('input[type="tel"]').type('19987168602')
        cy.get('.adicionar').click()
        cy.wait(2000)
    })

    it('Deve editar o contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="text"]').type('gabriel soares')
        cy.get('input[type="email"]').type('gabrielluiz299@gmail.com')
        cy.get('input[type="tel"]').type('19987168602')
        cy.get('.alterar').click()
        cy.wait(2000)
    })
    
    it('Deve editar o contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })   
})
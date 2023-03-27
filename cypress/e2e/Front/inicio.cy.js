/// <reference types="cypress" />

describe('Practica usando katalon-demo-cura', () => {

    beforeEach(() =>{
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })

    it('Verificar titulo', () => {
        cy.get('h1').should('have.text', 'CURA Healthcare Service')
    })

    it('Verificar subtitulo', () => {
        cy.get('h3').should('have.text','We Care About Your Health')
    })

    it('Verificar que el boton de la pagina de inicio', () => {
        cy.get('#btn-make-appointment').should('be.visible').and('have.text','Make Appointment')
    })

    it('Verificar que se puede ir a la pagina de login', () => {
        cy.get('#btn-make-appointment').click()
        cy.get('h2').should('be.visible')
    })

})
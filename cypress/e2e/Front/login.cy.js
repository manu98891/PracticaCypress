/// <reference types="cypress" />

describe('Test de login', () =>{

    beforeEach(() =>{
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.fixture('login').then(function(testdate){
            this.testdate = testdate
        })
        cy.get('#btn-make-appointment').click()
    })

    it('Verificar el titulo de la pagina de login', () =>{
        cy.get('h2').should('have.text','Login')
    })

    it('Verificar que el usuario se pueda logear', function() {
        cy.get('#txt-username').type(this.testdate.username)
        cy.get('#txt-password').type(this.testdate.password)
        cy.get('#btn-login').click()
        cy.url().should('contain','/#appointment')
    })

})
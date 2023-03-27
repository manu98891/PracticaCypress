const testDate = require('../../fixtures/titulos.json')

testDate.forEach((testDate) => {
    describe('Validar los titulos para cada pagina', () => {

        it('Validar titulo de ' + testDate.name, ()=> {
            cy.visit(testDate.location)
            cy.title().should('include',testDate.title)
        })

    })
})
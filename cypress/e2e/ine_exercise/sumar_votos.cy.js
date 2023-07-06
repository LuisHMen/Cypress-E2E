/// <reference types="cypress" />

context('Obtener el nombre del representante del partido, el nombre del partido y el total de votos', () => {
    describe('Obtener datos', () => {
        before(function () {
            cy.visit('https://prep2023-tamps.ine.mx/senadurias/nacional/circunscripcion2/tamaulipas/votos-candidatura/grafica')
            
            // * DES COMENTAR LA LÍNEA 11 SI ES LA PRIEMRA VEZ QUE SE EJECUTA
            // * COMENTAR ESTA LÍNEA DESPUÉS DE EJECUTAR UNA VEZ

            //cy.get('.btn-inicio').contains('Consulta Resultados Preliminares').click()
        })

        it('Obtener el nombre del representante del partido', () => {
            cy.get('#t-g-vpp > tbody > tr:nth-child(1) > td:nth-child(3) > div:nth-child(2) > p:nth-child(1)')
                .invoke('text')
                .should('include', 'Imelda Margarita Sanmiguel Sánchez')
        })

        it('Obtener el nombre del partido al que pertenece el representante', function () {
            cy.get('.img-partido').eq(1).invoke('attr', 'src').should('include', '/PAN.png')
            cy.get('.img-partido').eq(2).invoke('attr', 'src').should('include', '/PRI.png')
            cy.get('.img-partido').eq(3).invoke('attr', 'src').should('include', '/PRD.png')
        })

        it('Obtener los votos de los 3 partidos juntos', function () {
            cy.get('[class="14px font-bold"]').eq(1)
                .invoke('text').as('totalVotos')
                .should('include', '130,459')
        })

        it('Obtener los votos de cada partido', function () {
            cy.get('[class="btn btn-rosa btn-block px14 px-1 py-3"]')
                .contains(' Votos por Partido Político ').click()

            cy.get('[class="14px font-bold"]').eq(0).invoke('text').as('VotosPAN')
            cy.get('[class="14px font-bold"]').eq(1).invoke('text').as('VotosPRI')
            cy.get('[class="14px font-bold"]').eq(2).invoke('text').as('VotosPRD')
        })

        it('Sumar todos los votos y comparar el total', function () {
            const num1 = parseFloat(this.VotosPAN.replace(',', ''))
            const num2 = parseFloat(this.VotosPRI.replace(',', ''))
            const num3 = parseFloat(this.VotosPRD.replace(',', ''))
            const totalVotos = parseFloat(this.totalVotos.replace(',', ''))

            cy.log("Votos PAN: " + num1)
            cy.log("Votos PRI: " + num2)
            cy.log("Votos PRD: " + num3)
            cy.log("Votos sumados: " + totalVotos)

            expect(num1 + num2 + num3).equal(totalVotos)
        })
    })
})
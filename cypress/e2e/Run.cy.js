
import SimularCredito from "../support/Page"
import 'cypress-mochawesome-reporter/register'

describe('desafio-tecnico', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Simulação de: R$ 1.000 em 6 vezes', { scrollBehavior: false }, () => {
        SimularCredito.simular(1000, '271,27', 6)
    })

    it('Simulação de: R$ 4.000 em 12 vezes', { scrollBehavior: false }, () => {
        SimularCredito.simular(4000, '478,49', 12)
    })

    it('Simulação de: R$ 6.000 em 24 vezes', { scrollBehavior: false }, () => {
        SimularCredito.simular(6000, '347,89', 24)
    })
    
    after(() => {
        cy.clearLocalStorage();
    });
})
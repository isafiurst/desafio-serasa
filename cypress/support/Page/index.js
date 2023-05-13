const el = require("./elements.js").ELEMENTS;


class SimularCredito {

    simular(valor, valorFormatado, meses) {
        cy.get(el.container).scrollIntoView({offset:{top:-100, left:0}})
        cy.get(el.valor, { timeout: 3000 }).invoke('val', valor).trigger('input')
        cy.get(el.meses).invoke('val', meses).trigger('input')
        cy.wait(300) //o componente apresenta um comportamento estrnho e fica com o valor incorreto
        cy.get(el.meses).invoke('val', meses).trigger('input')
        cy.get(el.labelParcelas).should('have.text', meses + 'x')
        cy.get(el.labelMoeda).should('have.text', 'R$')
        cy.get(el.labelValorParcela).should('have.text', valorFormatado)
    }
}

export default new SimularCredito()
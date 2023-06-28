class homePage {

    clickBtn(boton) {
        cy.get('//button[text()="' + boton + '"]').click()
    }
}

export default homePage
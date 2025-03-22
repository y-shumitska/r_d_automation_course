describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://rozetka.com.ua');
    });

    it('should find searched goods', () => {
        cy.get('[rzsearchinput]').type('iphone');
        cy.get('button.button.button_color_green').click();
        cy.wait(5000);
        cy.get('.catalog-heading').should('contain', 'Apple iPhone');
    });

    it('should add searched goods to the cart', () => {
        cy.get('[rzsearchinput]').type('iphone');
        cy.get('button.button.button_color_green').click();
        cy.wait(5000);
        cy.get('rz-buy-button').eq(0).click();
    });
});

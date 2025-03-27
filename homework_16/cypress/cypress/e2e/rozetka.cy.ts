describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://rozetka.com.ua');
    });

    it('should find searched goods', () => {
        cy.get('[rzsearchinput]').type('iphone');
        cy.get('button.button.button_color_green').click();
        cy.get('.catalog-heading', { timeout: 10000 }).should('contain', 'Apple iPhone');
    });

    it('should add searched goods to the cart', () => {
        cy.get('[rzsearchinput]').type('iphone');
        cy.get('button.button.button_color_green').click();
        cy.get('rz-buy-button', { timeout: 10000 }).eq(0).click();
        cy.get('button.buy-button_state_in-cart', { timeout: 10000 }).should('exist');
    });
});

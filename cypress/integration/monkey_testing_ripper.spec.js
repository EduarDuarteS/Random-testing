describe('Wikipedia under monkeys', function() {
    it('visits wikipedia and survives monkeys', function() {
        cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        cy.wait(1000);
        randomClick(10);
    })
})
function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(500);
            randomClick(monkeysLeft);
        });
    }   
}
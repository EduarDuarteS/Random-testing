describe('Wikipedia under monkeys', function () {
    it('visits wikipedia and survives monkeys', function () {
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

    switch (getRandomInt(1, 5)) {
        case 1:
            cy.get('a').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if (!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({ force: true });
                    monkeysLeft = monkeysLeft - 1;
                }
                cy.wait(500);
                randomEvent(monkeysLeft);
            });
            break;
        case 2:
            cy.get('input').then($inputs => {
                var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                if (!Cypress.dom.isHidden(randomInput)) {
                    cy.wrap(randomInput).type('Hello, world', { force: true });
                    monkeysLeft = monkeysLeft - 1;
                }
                cy.wait(500);
                randomEvent(monkeysLeft);
            })
            break;
        case 3:
            cy.get("body").then(($body) => {
                if ($body.find("select").length) {
                    $body.find("select").select();
                    monkeysLeft = monkeysLeft - 1;
                } else {
                    cy.get("select").should("not.exist");
                    cy.log('No select element');
                }
                cy.wait(500);
                randomEvent(monkeysLeft);
            })
            break;
        case 4:
            cy.get('button').then($buttons => {
                var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
                if (!Cypress.dom.isHidden(randomButton)) {
                    cy.wrap(randomButton).click({ force: true });
                    monkeysLeft = monkeysLeft - 1;
                }
                cy.wait(500);
                randomEvent(monkeysLeft);
            })
            break;
    }
}
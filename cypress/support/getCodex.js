const NO_DELAY = { delay: 0 }

Cypress.Commands.add("getCodex", {
	prevSubject: "element",
}, (subject, data, options = NO_DELAY) => {
	cy.wrap(subject, options)
		.window(options)
		.then(window => window.getCodex(), options)
		.should("eq", data, options)
})

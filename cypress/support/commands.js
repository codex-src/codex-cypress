Cypress.Commands.add("expects", {
	prevSubject: "element",
}, (subject, data, opts) => {
	cy.wrap(subject, opts)
		.window(opts)
		.then(window => window.getCodex(), opts)
		.should("eq", data, opts)
})

// https://stackoverflow.com/a/57377435
Cypress.Commands.add("backspace", {
	prevSubject: "element",
}, (subject, count, opts) => {
	cy.wrap(subject, opts)
		.type("{backspace}".repeat(count), opts)
})

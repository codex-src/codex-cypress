// https://github.com/cypress-io/cypress/issues/927#issuecomment-345337856
Cypress.Commands.overwrite("type",
	(fn, subject, string, options) => {
	return fn(subject, string, { ...options, delay: 0 })
})

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

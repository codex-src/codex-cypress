const NO_DELAY = { delay: 0 }

// https://stackoverflow.com/a/57377435
Cypress.Commands.add("left", {
	prevSubject: "element",
}, (subject, count, options = NO_DELAY) => {
	cy.wrap(subject, options)
		.type("{leftarrow}".repeat(count), options)
})

Cypress.Commands.add("right", {
	prevSubject: "element",
}, (subject, count, options = NO_DELAY) => {
	cy.wrap(subject, options)
		.type("{rightarrow}".repeat(count), options)
})

Cypress.Commands.add("up", {
	prevSubject: "element",
}, (subject, count, options = NO_DELAY) => {
	cy.wrap(subject, options)
		.type("{arrowup}".repeat(count), options)
})

Cypress.Commands.add("down", {
	prevSubject: "element",
}, (subject, count, options = NO_DELAY) => {
	cy.wrap(subject, options)
		.type("{arrowdown}".repeat(count), options)
})

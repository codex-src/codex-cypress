const NO_DELAY = { delay: 0 }

// https://github.com/cypress-io/cypress/issues/927#issuecomment-345337856
Cypress.Commands.overwrite(
	"type",
	(fn, subject, string, options = NO_DELAY) => fn(subject, string, { ...options, delay: 0 }),
)

Cypress.Commands.add("backspace", {
	prevSubject: "element",
}, (subject, count, options = NO_DELAY) => {
	cy.wrap(subject, options)
		.type("{backspace}".repeat(count), options)
})

Cypress.Commands.add("delete", {
	prevSubject: "element",
}, (subject, count, options = NO_DELAY) => {
	for (let index = 0; index < count; index++) {
		cy.wrap(subject, options)
			.trigger("input", { inputType: "deleteContentForward" }, options) // FIXME
	}
})

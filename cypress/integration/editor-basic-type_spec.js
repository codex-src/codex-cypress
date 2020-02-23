import len from "./len"

const NO_DELAY = { delay: 0 }

Cypress.Commands.add("innerText", { prevSubject: "element" }, (subject, data, options) => {
	cy.wrap(subject, options)
		.window(options)
		.then(window => window.getCodex(), options)
		.should("eq", data, options)
})

// https://stackoverflow.com/a/57377435
Cypress.Commands.add("backspace", { prevSubject: "element" }, (subject, count, options) => {
	cy.wrap(subject, options)
		.type("{backspace}".repeat(count), options)
})

before(() => {
	cy.visit("http://localhost:3000/demo")
})

describe("editor basic type", () => {
	it("can type and backspace", () => {
		const data = "Hello, world! 😀"
		cy.get("#editor")
			.type(data, NO_DELAY)
			.innerText(data)
		cy.get("#editor")
			.backspace(len(data), NO_DELAY)
			.innerText("")
	})
	it("can type and backspace (multiline)", () => {
		const data = "Hello, world! 😀\n\nHello, world! 😀\n\nHello, world! 😀"
		cy.get("#editor")
			.type(data, NO_DELAY)
			.innerText(data)
		cy.get("#editor")
			.backspace(len(data), NO_DELAY)
			.innerText("")
	})
	it("can type and backspace 10 paragraphs", () => {
		const data = "\n".repeat(10)
		cy.get("#editor")
			.type(data, NO_DELAY)
			.innerText(data)
		cy.get("#editor")
			.backspace(len(data), NO_DELAY)
			.innerText("")
	})
	it("can type and backspace 100 paragraphs", () => {
		const data = "\n".repeat(100)
		cy.get("#editor")
			.type(data, NO_DELAY)
			.innerText(data)
		cy.get("#editor")
			.backspace(len(data), NO_DELAY)
			.innerText("")
	})
})

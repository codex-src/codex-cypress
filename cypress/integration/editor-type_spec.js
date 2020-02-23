import len from "../helpers/len"

before(() => {
	cy.visit("http://localhost:3000/demo")
})

describe("editor type", () => {
	it("can type and backspace", () => {
		const data = "Hello, world! 😀"
		cy.get("#editor")
			.type(data)
			.getCodex(data)
		cy.get("#editor")
			.backspace(len(data))
			.getCodex("")
	})
	it("can type and backspace (multiline)", () => {
		const data = "Hello, world! 😀\n\nHello, world! 😀\n\nHello, world! 😀"
		cy.get("#editor")
			.type(data)
			.getCodex(data)
		cy.get("#editor")
			.backspace(len(data))
			.getCodex("")
	})
	it("can type and backspace 10 paragraphs", () => {
		const data = "\n".repeat(10)
		cy.get("#editor")
			.type(data)
			.getCodex(data)
		cy.get("#editor")
			.backspace(len(data))
			.getCodex("")
	})
	it("can type and backspace 100 paragraphs", () => {
		Cypress.config("defaultCommandTimeout", 10e3)
		const data = "\n".repeat(100)
		cy.get("#editor")
			.type(data)
			.getCodex(data)
		cy.get("#editor")
			.backspace(len(data))
			.getCodex("")
	})
})

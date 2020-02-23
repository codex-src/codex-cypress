import len from "../helpers/len"

const NO_DELAY = { delay: 0 }

before(() => {
	cy.visit("http://localhost:3000/demo")
})

describe("editor basic type", () => {
	it("can type and backspace", () => {
		const data = "Hello, world! 😀"
		cy.get("#editor")
			.type(data, NO_DELAY)
			.expects(data)
		cy.get("#editor")
			.backspace(len(data), NO_DELAY)
			.expects("")
	})
	it("can type and backspace (multiline)", () => {
		const data = "Hello, world! 😀\n\nHello, world! 😀\n\nHello, world! 😀"
		cy.get("#editor")
			.type(data, NO_DELAY)
			.expects(data)
		cy.get("#editor")
			.backspace(len(data), NO_DELAY)
			.expects("")
	})
	it("can type and backspace 10 paragraphs", () => {
		const data = "\n".repeat(10)
		cy.get("#editor")
			.type(data, NO_DELAY)
			.expects(data)
		cy.get("#editor")
			.backspace(len(data), NO_DELAY)
			.expects("")
	})
	it("can type and backspace 100 paragraphs", () => {
		const data = "\n".repeat(100)
		cy.get("#editor")
			.type(data, NO_DELAY)
			.expects(data)
		cy.get("#editor")
			.backspace(len(data), NO_DELAY)
			.expects("")
	})
})

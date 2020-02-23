import len from "../helpers/len"

before(() => {
	cy.visit("http://localhost:3000/demo")
})

describe("can type emoji", () => {
	it("can type and backspace smileys", () => {
		const data = "😀😃😄😁😆😅🤣😂🙂🙃😉😊😇"
		cy.get("#editor")
			.type(data)
			.getCodex(data)
		cy.get("#editor")
			.backspace(len(data))
			.getCodex("")
	})
	it("can type and backspace smileys", () => {
		const data = "😀😃😄😁😆😅🤣😂🙂🙃😉😊😇"
		cy.get("#editor")
			.type(data)
			.getCodex(data)
		cy.get("#editor")
			.left(len(data))
			.delete(len(data))
			.getCodex("")
	})
	// it("can type and backspace handshakes", () => {
	// 	const data = "🧑‍🤝‍🧑🧑🏻‍🤝‍🧑🏻🧑🏻‍🤝‍🧑🏼🧑🏻‍🤝‍🧑🏽🧑🏻‍🤝‍🧑🏾🧑🏻‍🤝‍🧑🏿🧑🏼‍🤝‍🧑🏻🧑🏼‍🤝‍🧑🏼🧑🏼‍🤝‍🧑🏽🧑🏼‍🤝‍🧑🏾🧑🏼‍🤝‍🧑🏿🧑🏽‍🤝‍🧑🏻🧑🏽‍🤝‍🧑🏼🧑🏽‍🤝‍🧑🏽🧑🏽‍🤝‍🧑🏾🧑🏽‍🤝‍🧑🏿🧑🏾‍🤝‍🧑🏻🧑🏾‍🤝‍🧑🏼🧑🏾‍🤝‍🧑🏽🧑🏾‍🤝‍🧑🏾🧑🏾‍🤝‍🧑🏿🧑🏿‍🤝‍🧑🏻🧑🏿‍🤝‍🧑🏼🧑🏿‍🤝‍🧑🏽🧑🏿‍🤝‍🧑🏾🧑🏿‍🤝‍🧑🏿"
	// 	cy.get("#editor")
	// 		.type(data)
	// 		.getCodex(data)
	// 	cy.get("#editor")
	// 		.backspace(len(data))
	// 		.getCodex("")
	// })
	// it("can type and backspace flags", () => {
	// 	const data = "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}"
	// 	cy.get("#editor")
	// 		.type(data)
	// 		.getCodex(data)
	// 	cy.get("#editor")
	// 		.backspace(len(data))
	// 		.getCodex("")
	// })
})

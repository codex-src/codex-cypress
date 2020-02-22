it("can open home", () => {
	cy.visit("http://localhost:3000/")
		.get("[data-e2e='home']")
		.click()
		.url()
		.should("eq", "http://localhost:3000/")
})

it("can open demo", () => {
	cy.visit("http://localhost:3000/")
		.get("[data-e2e='demo']")
		.click()
		.url()
		.should("eq", "http://localhost:3000/demo")
})

it("can open demo via cta button", () => {
	cy.visit("http://localhost:3000/")
		.get("[data-e2e='cta-button']")
		.click()
		.url()
		.should("eq", "http://localhost:3000/demo")
})

it("can open demo via cta editor", () => {
	cy.visit("http://localhost:3000/")
		.get("[data-e2e='cta-editor']")
		.click()
		.url()
		.should("eq", "http://localhost:3000/demo")
})

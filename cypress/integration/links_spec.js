it("Can open the home page", () => {
	cy.visit("http://localhost:3000/")
		.get("[data-e2e='home']")
		.click()
		.url()
		.should("eq", "http://localhost:3000/")
})

it("Can open the demo page", () => {
	cy.visit("http://localhost:3000/")
		.get("[data-e2e='demo']")
		.click()
		.url()
		.should("eq", "http://localhost:3000/demo")
})

it("Can open the demo page via the call-to-action button", () => {
	cy.visit("http://localhost:3000/")
		.get("[data-e2e='cta-button']")
		.click()
		.url()
		.should("eq", "http://localhost:3000/demo")
})

it("Can open the demo page via the call-to-action editor", () => {
	cy.visit("http://localhost:3000/")
		.get("[data-e2e='cta-editor']")
		.click()
		.url()
		.should("eq", "http://localhost:3000/demo")
})

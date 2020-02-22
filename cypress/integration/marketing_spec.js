it("init", () => {
	cy.visit("http://localhost:3000/")
})

it("can open demo via cta button", () => {
	cy.get("[data-e2e='cta-btn']")
		.click()
		.url()
		.should("eq", "http://localhost:3000/demo")
})

it("can open demo via cta editor", () => {
	cy.get("[data-e2e='cta-editor']")
		.click()
		.url()
		.should("eq", "http://localhost:3000/demo")
})
